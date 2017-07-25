
// JSX gets even better with TypeScript!!!

class Greeting extends React.Component<{name: string}, {}> {
    render() {
        return <div>Hello {this.props.name}!</div>;
    }
}

class GreetingList extends React.Component<{}, {}> {
    render() {
        let names = ["António", "Maria"];
        return <ul>
            {names.map(person => <li><Greeting name={person}/></li>)}
            </ul>
    }
}





class TabelaConcelhos extends React.Component<{}, {}> {
    render() {

        var concelhos = [];

        return <table>
                <thead><th></th></thead>

                { concelhos.map(concelho => <tr><td></td></tr>) }

            </table>;


    }
}