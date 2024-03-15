class LikeButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			liked: false
		}
	}

	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}
        return (
            <button onClick={() => {
                this.setState({liked: true});
                console.log(this.state);
        }}>Like This 2</button>
        );
	}
}

ReactDOM.render(<LikeButton />, document.querySelector('#like_button_container_2'))