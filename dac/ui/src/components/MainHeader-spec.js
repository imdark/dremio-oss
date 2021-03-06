/*
 * Copyright (C) 2017 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { shallow } from 'enzyme';
import Immutable from 'immutable';

import { MainHeader } from './MainHeader';

describe('MainHeader', () => {

  let minimalProps;
  let commonProps;
  let context;
  beforeEach(() => {
    minimalProps = {
      user: Immutable.fromJS({admin: true, userName: 'dremio'}),
      location: {}
    };
    commonProps = {
      ...minimalProps
    };
    context = {
      router: {push: sinon.spy()},
      username: 'test_user'
    };
  });

  it('should render with minimal props without exploding', () => {
    const wrapper = shallow(<MainHeader {...minimalProps}/>, {context});
    expect(wrapper).to.have.length(1);
  });

  it('renders <div>', () => {
    const wrapper = shallow(<MainHeader {...commonProps}/>, {context});
    expect(wrapper.type()).to.eql('div');
  });
});
