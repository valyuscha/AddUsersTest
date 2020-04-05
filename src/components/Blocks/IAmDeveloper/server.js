import htmlImg from '../../../assets/imgs/html.svg'
import cssImg from '../../../assets/imgs/css.svg'
import javascriptImg from '../../../assets/imgs/javascript.svg'

export const name = {
  id: 'me_and_web',
  defaultMessage: 'About my relationships with web-development'
}

export const developmentRelations = [
  {
    id: 1,
    img: htmlImg,
    nameId: 'love_html',
    nameDefaultMessage: 'I\'m in love with HTML',
    textId: 'html',
    textDefaultMessage: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
  },
  {
    id: 2,
    img: cssImg,
    nameId: 'friend_css',
    nameDefaultMessage: 'CSS is my best friend',
    textId: 'css',
    textDefaultMessage: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.'
  },
  {
    id: 3,
    img: javascriptImg,
    nameId: 'passion_js',
    nameDefaultMessage: 'JavaScript is my passion',
    textId: 'js',
    textDefaultMessage: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.'
  }

]