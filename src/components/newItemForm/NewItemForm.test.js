import React from "react";
import NewItemForm from "./NewItemForm";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("The new item form", () => {
  describe("The presentational container", () => {
    it("renders as expected", () => {
      function defaultHandler() {}
      const tree = renderer
        .create(
          <MemoryRouter>
            <NewItemForm
              title="Title"
              description="Description"
              handleTitleChange={defaultHandler}
              handleDescriptionChange={defaultHandler}
              handleSubmitForm={defaultHandler}
              isShowingSubmissionError={false}
            />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
