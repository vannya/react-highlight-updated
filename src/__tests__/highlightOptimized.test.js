import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Highlight from "../lib/optimized.js";

let props;
let mountedComponent;

describe("highlight", () => {
  beforeEach(() => {
    props = {
      className: undefined,
      element: undefined,
      innerHTML: undefined,
      languages: ["javascript", "css"]
    };
    mountedComponent = undefined;
  });
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Highlight {...props}>Mock Text</Highlight>);
    }
    return mountedComponent;
  };
  // snapshot
  it("should match snapshot", () => {
    const tree = renderer
      .create(<Highlight {...props}>Mock Text</Highlight>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("text passed as child should display", () => {
    const component = testComponent().find("Highlight");
    expect(component.text()).toBe("Mock Text");
    expect(component.props().children).toBe("Mock Text");
  });

  it("pre and code tags should be in markup", () => {
    const preTag = testComponent().find("pre");
    expect(preTag.length).toBe(1);
    const codeTag = testComponent().find("code");
    expect(codeTag.length).toBe(1);
  });

  it("className should be the default when none is passed", () => {
    const codeTag = testComponent().find("code");
    expect(codeTag.props().className).toBe(undefined);
  });

  it("className should be assigned when passed", () => {
    props.className = "java";
    props.languages = [];
    const codeTag = testComponent().find("code");
    expect(codeTag.props().className).toBe("java");
  });

  it("className should be assigned when passed", () => {
    props.className = "java";
    const codeTag = testComponent().find("code");
    expect(codeTag.props().className).toBe("java");
  });

  it("element prop renders children in that element - span test", () => {
    props.element = "span";
    const component = testComponent().find("span");
    expect(component.length).toBe(1);
  });

  it("element prop renders children in that element - button test", () => {
    props.element = "button";
    const buttonComp = testComponent().find("button");
    expect(buttonComp.length).toBe(1);
  });

  it("should render innerHTML in a default div", () => {
    props.innerHTML = true;
    const component = testComponent().find("div");
    expect(component.text()).toBe("Mock Text");
    expect(component.props().dangerouslySetInnerHTML).toStrictEqual({
      __html: "Mock Text"
    });
  });

  it("should render innerHTML in a span", () => {
    props.element = "span";
    props.innerHTML = true;
    const component = testComponent().find("span");
    expect(component.text()).toBe("Mock Text");
    expect(component.props().dangerouslySetInnerHTML).toStrictEqual({
      __html: "Mock Text"
    });
  });
});
