class Movie extends React.Component {
	constructor(props) {
		super(props)
		this.state = {movies: ["电影1", "电影2"]}
	}

	render() {
		let arr = []
		for (const movie of this.state.movies) {
			arr.push(<li>{movie}</li>)	
		}
		return (
			<div>
				电影列表
				<ul>
					{arr}
				</ul>
				电影列表2
				<ul>
					{
						this.state.movies.map(e => <li>{e}</li>)
					}
					{
						this.state.movies.map((e, i, arr) => <li>{arr}</li>)
					}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<Movie />, document.getElementById('root'))