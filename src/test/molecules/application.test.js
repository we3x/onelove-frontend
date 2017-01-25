/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import { Application } from '../../components/molecules/application';
import Paper from 'material-ui/Paper';
import ApplicationIcon from 'material-ui/svg-icons/action/dashboard';
import styles from '../../components/atoms/icon/styles';


describe("Molecule Applcation", () => {
  const setup = () => {
    const renderer = ReactTestUtils.createRenderer();
    const props = {
      name: "ngnix",
      serviceId: "808080",
      confirm: jest.fn(),
    };

    renderer.render(
      <Application {...props} />
    );

    return renderer.getRenderOutput();
  };

  const result = setup();

  it("Application return paper element", () => {
    expect(result.type).to.equal(Paper);
    expect(result.props.style).to.equal(styles.paper);
  });

  it("Testing children of app", () => {
    const firstChild = result.props.children[0];
    expect(firstChild.type).to.equal('div');
    expect(firstChild.props.children).to.equal('x');
    expect(firstChild.props.style).to.equal(styles.close);

    const secondChild = result.props.children[1];
    expect(secondChild.type).to.equal(ApplicationIcon);
    expect(secondChild.props.style).to.equal(styles.icon);
    expect(secondChild.props.color).to.equal(styles.icon.color);

    const thirdChild = result.props.children[2];
    expect(thirdChild.type).to.equal('div');
    expect(thirdChild.props.children).to.equal('ngnix');
  });
});