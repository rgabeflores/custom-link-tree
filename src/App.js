// import logo from './logo.svg';
import './App.css';

import { Layout, Button, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout className="App">
            <Content className="links-list-container">
                <Title className="links-list-title">Gabe Flores</Title>
                <ul className="links-list">
                    <li><Button type="link" href="https://rgabeflores.com" target="_blank" rel="noopener noreferrer">Website</Button></li>
                    <li><Button type="link" href="" rel="noopener noreferrer" size="large">Link</Button></li>
                    <li><Button type="link" href="/" target="_blank" rel="noopener noreferrer">Link</Button></li>
                    <li><Button type="link" href="/" target="_blank" rel="noopener noreferrer">Link</Button></li>
                    <li><Button type="link" href="https://rgabeflores.darkroom.tech/" target="_blank" rel="noopener noreferrer">Photography Prints</Button></li>
                </ul>
            </Content>
        </Layout>
    );
}

export default App;
