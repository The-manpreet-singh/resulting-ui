import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import {
  MemoryRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("PrivateRoute Test", () => {

  it("should render component if user has been authenticated", () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: "/aprivatepath", component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PrivateRoute getToken={true}  ownProps={props} />
      </MemoryRouter>
    );

    expect(enzymeWrapper.exists(AComponent)).toBe(true);
  });
  it('should redirect if user is not authenticated', () => {
    const AComponent = () => <div>AComponent</div>;
    const props = { path: '/aprivatepath', component: AComponent };

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <PrivateRoute getToken={false} ownProps={props} />
      </MemoryRouter>,
    );
    const history= enzymeWrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/');
  });

});
