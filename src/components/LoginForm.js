import React from 'react';
import { UserConsumer, withUser } from '../contexts/UserContext';
import { Form } from 'semantic-ui-react';

class LoginForm extends React.Component {
  static defaultProps = {
    // 사용자가 로그인 폼을 전송했을 때 호출되는 함수
    // username과 password 인수를 받음
    login: (username, password) => {},
    // 회원 가입 버튼을 눌렀을 때 호출되는 함수
    onRegister: () => {},
  };
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }

  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <Form.Input label="사용자 이름" type="text" name="username" />
          <Form.Input label="비밀번호" type="password" name="password" />

          <Form.Button>로그인</Form.Button>
        </Form>
        <button onClick={() => onRegister()}>회원 가입</button>
      </React.Fragment>
    );
  }
}

export default withUser(LoginForm);
