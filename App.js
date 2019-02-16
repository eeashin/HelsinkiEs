import React from 'react';
import { Home } from './app/views/Home.js';
import { Apply } from './app/views/Apply.js';
import { StackNavigator } from 'react-navigation';
import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { Subscribe } from './app/views/Subscribe.js';
import { Login } from './app/views/Login.js';
import { Blog } from './app/views/Blog.js';
import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';
import { BlogDetail } from './app/views/BlogDetail';
import { About } from './app/views/About.js';
import Maps from './app/views/Maps.js';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ApplyRT: {
    screen: Apply
  },
  VideoRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  SubscribeRT: {
    screen: Subscribe
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  },
  BlogRT: {
    screen: Blog
  },
  BlogDetailRT: {
    screen: BlogDetail
  },
  AboutRT: {
    screen: About
  },
  MapRT: {
    screen: Maps
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}


