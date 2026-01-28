import { Page, test } from '@playwright/test';
import { login, verifyContinueShoppingButtonExists, addItem, navigateToCart, verifyProductsAreInCart, verifyRemoveButtonExists, verifyCheckoutButtonExists } from './methods';

// Remove (per product)
test('User can add 2 products to cart and go to cart and click remove products from cart', async ({ page }) => {
  await login(page, "standard_user", "secret_sauce");
  await addItem(page, "4"); // Sauce Labs Backpack
  await addItem(page, "0"); // Sauce Labs Bike Light
  await navigateToCart(page);
  await verifyProductsAreInCart(page, 2);
  await verifyRemoveButtonExists(page);
});

// Continue Shopping
test('User can add 2 products to cart and go to cart and click continue shopping from cart', async ({ page }) => {
  await login(page, "standard_user", "secret_sauce");
  await addItem(page, "4"); // Sauce Labs Backpack
  await addItem(page, "0"); // Sauce Labs Bike Light
  await navigateToCart(page);
  await verifyProductsAreInCart(page, 2);
  await verifyContinueShoppingButtonExists(page);
});

// Checkout
test('user can proceed to checkout from cart', async ({ page }) => {
  await login(page, "standard_user", "secret_sauce");
  await addItem(page, "4"); // Sauce Labs Backpack
  await addItem(page, "0"); // Sauce Labs Bike Light
  await navigateToCart(page);
  await verifyProductsAreInCart(page, 2);
  await verifyCheckoutButtonExists(page);
});