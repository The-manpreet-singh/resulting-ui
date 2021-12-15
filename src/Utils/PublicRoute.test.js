import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("PublicRoute Test", () => {
  it("should render component if user not authenticated", () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: "/aprivatepath", component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PublicRoute getToken={false} ownProps={props} />
      </MemoryRouter>
    );

    expect(enzymeWrapper.exists(AComponent)).toBe(true);
  });
  it("should redirect if user is authenticated", () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: "/aprivatepath", component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PublicRoute getToken={true} ownProps={props} />
      </MemoryRouter>
    );
    const history = enzymeWrapper.find("Router").prop("history");
    expect(history.location.pathname).toBe("/home");
  });
});
