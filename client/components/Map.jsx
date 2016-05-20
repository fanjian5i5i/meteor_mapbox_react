Map = React.createClass({
  render() {
    return (
      <div>
	    <div className="content-wrapper">
        <h1>This is where the map goes</h1>
      </div>
	    <Sidenav />
	  </div>
    )
  }
})

Sidenav = React.createClass({
  getInitialState() {
    return {
      showTooltip: false,
      tooltipX: "50px",
      tooltipY: "0px",
      tooltipDescription: "",
    }
  },
  showTooltip(e) {
    this.setState({
      showTooltip: true,
      tooltipY: e.nativeEvent.target.offsetTop + 
        (e.nativeEvent.target.offsetHeight / 2) + "px"
    })
  },
  hideTooltip(e) {
    this.setState({
      showTooltip: false
    })
  },
  setTooltipDescription(item) {
    this.setState({
      tooltipDescription: item.description
    })
  },
  render() {

    return (
      <nav className="sidenav">
          <SidenavTooltip 
            tooltipDescription={this.state.tooltipDescription}
            showTooltip={this.state.showTooltip} 
              tooltipX={this.state.tooltipX} 
              tooltipY={this.state.tooltipY}/>
          <ul className="sidenav-list">
            <SidenavIcons 
              setTooltipDescription={this.setTooltipDescription}
              showTooltip={this.showTooltip} 
              hideTooltip={this.hideTooltip}/>
          </ul>
        </nav>
    )
  }
})

SidenavTooltip = React.createClass({
  render() {
    tooltipStyle = {
        top: this.props.tooltipY,
        left: this.props.tooltipX
    }
    if (this.props.showTooltip) {
      tooltipStyle.opacity = "1";
      tooltipStyle.visibility = "visible";
    } else {
      tooltipStyle.opacity = "0";
      tooltipStyle.visibility = "hidden";
    }
    return (
      <div className="sidenav-tooltip" style={tooltipStyle}>
        <p>{this.props.tooltipDescription}</p>
        <div className="tail"></div>
      </div>
    )
  }
})

SidenavIcons = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id
  },
  render() {
    let iconList = [
        {name: "fa fa-database", description: "Data Layers"},
        {name: "fa fa-user-plus", description: "Add Volunteer"},
        {name: "fa fa-users", description: "View Volunteers"},
        {name: "fa fa-bicycle", description: "Dispatcher"},
        {name: "fa fa-list-ul", description: "View Data as List"},
        {name: "fa fa-lightbulb-o", description: "Campaign Autopilot"},
        {name: "fa fa-list-ol", description: "Leaderboard"},
        {name: "fa fa-line-chart", description: "Chart etc."},
        {name: "fa fa-cog", description: "Settings"},
      ]
    let list = iconList.map((item) => {
      return (
        <li key={item.name} className="sidenav-list-item"
          onMouseEnter={this.props.setTooltipDescription.bind(null, item)}
           onMouseOver={this.props.showTooltip}
           onMouseOut={this.props.hideTooltip}>
          <i className={item.name}></i>
        </li>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
})