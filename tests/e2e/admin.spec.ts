import { test, expect } from "@playwright/test";

test("login page loads", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});

test("demo login reaches dashboard with demo badge", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByText(/Demo mode/i)).toBeVisible();
});

test("customers page shows API required", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/customers");
  await expect(page.getByRole("heading", { name: /Customers is not connected yet/i })).toBeVisible();
});

test("api readiness page lists modules", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/api-readiness");
  await expect(page.getByRole("heading", { name: "API readiness" })).toBeVisible();
  await expect(page.getByRole("main").getByText("Orders", { exact: true }).first()).toBeVisible();
});
