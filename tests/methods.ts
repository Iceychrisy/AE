import { expect, Page } from '@playwright/test';

export async function login(page: Page, user: string, password: string) {
    // Login with username and password
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(user);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();
}

export async function addItem(page: Page, itemId: string) {
    // Add item to cart
    await page.locator(`[data-test="item-${itemId}-title-link"]`).click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.waitForLoadState('networkidle');
}

export async function navigateToCart(page: Page) {
    // Navigate to cart
    await page.locator('[data-test="shopping-cart-link"]').click();
}

export async function clickCheckoutButton(page: Page) {
    // Click the checkout button on the checkout page
    await page.locator('[data-test="checkout"]').click();
}

export async function finishPurchase(page: Page) {
    // Finish and purchase items
    await page.locator('[data-test="checkout"]').click();
}

export async function verifyContinueShoppingButtonExists(page: Page) {
    // Verify the continue shopping button is visible, then click it
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
    await page.locator('[data-test="continue-shopping"]').click();
    await page.waitForLoadState('networkidle');
}

export async function verifyYouPurchasedItems(page: Page) {
    // Verify we're on the review page and complete purchase
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you');
    await page.locator('[data-test="finish"]').click();
}

export async function verifyCheckoutButtonExists(page: Page) {
    // Verify checkout button exists
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
}

export async function verifyProductsAreInCart(page: Page, productCount: number) {
    // Verify products are in cart
    await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText(productCount.toString());
    await expect(page.getByText('1Sauce Labs Bike LightA red')).toBeVisible();
    await expect(page.getByText('1Sauce Labs Backpackcarry.')).toBeVisible();
}

export async function verifyRemoveButtonExists(page: Page) {
    // Verify remove button exists for items in cart
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
}
