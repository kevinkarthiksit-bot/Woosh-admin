export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export class ApiNotReadyError extends Error {
  expectedEndpoint: string;

  constructor(expectedEndpoint: string, message?: string) {
    super(message ?? `API required: ${expectedEndpoint} is not ready yet.`);
    this.name = "ApiNotReadyError";
    this.expectedEndpoint = expectedEndpoint;
  }
}

export class ApiSecurityBlockedError extends Error {
  module: string;

  constructor(module: string, message?: string) {
    super(
      message ??
        `${module} is blocked until backend admin auth and RBAC protect the endpoint.`,
    );
    this.name = "ApiSecurityBlockedError";
    this.module = module;
  }
}
