import { shallow } from 'enzyme';

import CardList from './CardList';

it('render CardList', () => {
  const mockRobots = [
    { id: 1, name: 'asadasd', username: 'Daniel', email: 'daniel@gmail.com' },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
