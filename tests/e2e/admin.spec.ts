import { test, expect } from "@playwright/test";

test("login page loads", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});

test("demo login reaches dashboard", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("customers page shows management UI", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/customers");
  await expect(page.getByRole("heading", { name: "Customer Management" })).toBeVisible();
});

test("orders page shows order management UI", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/orders");
  await expect(page.getByRole("heading", { name: "Order Management" })).toBeVisible();
});

test("live operations page loads", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/live-operations");
  await expect(page.getByRole("heading", { name: "Live Operations" })).toBeVisible();
});

test("support page shows complaints UI", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/support");
  await expect(page.getByRole("heading", { name: "Complaints & Support" })).toBeVisible();
});

test("reports analytics page loads", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/reports-analytics");
  await expect(page.getByRole("heading", { name: "Reports & Analytics" })).toBeVisible();
});

test("api readiness page lists modules", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.goto("/api-readiness");
  await expect(page.getByRole("heading", { name: "API readiness" })).toBeVisible();
});
