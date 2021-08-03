import { Menu } from '../components/Menu'


export default function Home() {

    function App() {
        return (
            <div>Appbar</div>
        )
    }

    return (
        <Menu AppBar={App}>
            <div>
                <p>spotify</p>
            </div>
        </Menu>
    )
}
