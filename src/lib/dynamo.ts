import { DynamoDBClient, type DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

/**
 * DynamoDB client factory.
 *
 * Credential resolution order:
 *   1. KAOSMT_AWS_ACCESS_KEY_ID / KAOSMT_AWS_SECRET_ACCESS_KEY
 *      (used in Amplify production — Amplify reserves the "AWS_" prefix
 *       for env-var names, so we have to ship our own keys under a
 *       different prefix and pass them explicitly to the SDK.)
 *   2. AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY via the SDK's default
 *      credential chain (used locally from .env.local).
 *   3. Lambda execution role / instance metadata (default chain fallback).
 *
 * Region: the SDK's default region resolution is left intact — locally
 * AWS_REGION comes from .env.local; in Lambda it's set intrinsically by
 * the runtime.
 */
function buildClientConfig(): DynamoDBClientConfig {
  const accessKeyId = process.env.KAOSMT_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.KAOSMT_AWS_SECRET_ACCESS_KEY;

  if (accessKeyId && secretAccessKey) {
    return { credentials: { accessKeyId, secretAccessKey } };
  }

  return {};
}

// Module-level singleton — reused across warm Lambda invocations.
export const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient(buildClientConfig()));

export const FOUNDERS_TABLE = "kaosmt-founder-applications";

export type FounderRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipInterest: string;
  whyJoin: string;
  submittedAt: string;
};
