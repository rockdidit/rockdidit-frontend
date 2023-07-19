export default {
  e2e: {
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on: any, config: any): void {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
};
