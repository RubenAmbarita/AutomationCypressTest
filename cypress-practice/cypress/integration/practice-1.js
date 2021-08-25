describe("kumpulan test case", function () {
  it("tc-login", function () {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");

    // Isi nama dan email, lalu klik button “email me!”.
    cy.get("#et_pb_contact_name_0").type("test").should("have.value", "test");
    cy.get("#et_pb_contact_email_0")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
    cy.contains("Email Me!").click();
  }),
    it("tc-check-radioButton", function () {
      cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
      cy.get('[value="male"]').should("have.value", "male");
    }),
    it("tc-check-selectButton", function () {
      cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
      cy.get("select").should("have.value", "volvo");
    }),
    it("tc-check-selectButton", function () {
      cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
      cy.get("select").select("Audi");
    }),
    it("tc-check-valueClickMe", function () {
      cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
      cy.get(".et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button").should(
        "have.text",
        "Click Me"
      );
    });
});
