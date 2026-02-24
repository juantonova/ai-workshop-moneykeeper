function createExpenseHandler(ctx) {
  return {
    handler: "createExpenseHandler",
    hasContext: Boolean(ctx),
  };
}

module.exports = { createExpenseHandler };
