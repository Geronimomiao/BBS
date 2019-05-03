import React, {Component} from 'react';
import PostItem from './PostItem'
import './PostList.css'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null; // 定时器
    // this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {id: 1, title: '学习 React', author: '张三', date: '2017-09-01 10:00', vote: 0},
          {id: 2, title: '前端框架 你爱哪一个', author: '李四', date: '2017-09-01 12:00', vote: 0},
          {id: 3, title: 'Web App 时代已经到来', author: '王五', date: '2017-09-01 14:00', vote: 0},
        ]
      })
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleVote = (id) => {
    console.log(this);
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
      return newItem;
    });
    this.setState({posts})
  }

  handleSave = (post) => {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item;
      return newItem;
    });
    console.log(posts)
    this.setState({posts})
  }

  render() {
    return (
      <div className='container'>
        <div className='container-title'>话题列表</div>
        <ul>
          {this.state.posts.map(item =>
            <PostItem
              key={item.id}
              post={item}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default PostList;