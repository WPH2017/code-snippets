import React, { Component } from 'react';
import './App.css';
import Pick from './components/pick'
import { Layout, Row, Col, Input, Menu, Dropdown, Avatar, Icon } from 'antd';
const Search = Input.Search;
const { Header, Footer, Content } = Layout;
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">您</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">账户设置</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
      </Menu.Item>
    </Menu>
);

class App extends Component {
  render() {
    return (
        <Layout>
          <Header>
            <Row type="flex" justify="center">
              <Col span={4} style={{ fontSize: 20 }}>
                <Icon type="code-o" /> Code Snippets
              </Col>
              <Col span={4}></Col>
              <Col span={4}></Col>
              <Col span={4} id="account">
                <Search
                    placeholder="输入搜索字段"
                    onSearch={value => console.log(value)}
                    enterButton
                    style={{ width : 200, marginRight:10 }}
                />
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Avatar icon="user" />
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content>
            <Row type="flex" justify="center">
              <Col span={16}>
                <Pick></Pick>
              </Col>
            </Row>
          </Content>
          <Footer>Author: WengPenghui Date: 2017/12/13</Footer>
        </Layout>
    );
  }
}

export default App;
