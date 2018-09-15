import React from "react";
import { rhythm } from "../utils/typography";
import slug from "slug";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";
import 'font-awesome/css/font-awesome.css';
import './widget-search.css';

export default class WidgetGoogleSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: ""
    }

    this.onInputChanged = this.onInputChanged.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputChanged({ target }) {
    this.setState({
      textSearch: target.value
    });
  }

  onSearch(event) {
    event.preventDefault();

    if (this.state.textSearch) {
      const query = `site:${this.props.siteUrl} ${this.state.textSearch}`
      window.open(`https://www.google.com/search?q=${encodeURI(query)}`);
    }
  }

  render() {
    return (
      <div>
        <WidgetContainer>
          <WidgetTitle> Tìm kiếm </WidgetTitle>

          <form style={{ width: `100%` }}>
            <input
              type="text"
              className="widget-search-input"
              placeholder="Nhập từ khóa tìm kiếm tại đây..."
              onChange={this.onInputChanged}
              required
            />
            <button type="submit" className="widget-search-btn" onClick={this.onSearch}>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </WidgetContainer>
      </div>
    )
  }
}