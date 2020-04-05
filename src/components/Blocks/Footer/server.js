import mail from '../../../assets/imgs/icons/mail.svg'
import phone from '../../../assets/imgs/icons/phone.svg'
import cellphone from '../../../assets/imgs/icons/cellphone.svg'
import facebook from '../../../assets/imgs/icons/facebook.svg'
import linkedin from '../../../assets/imgs/icons/linkedin.svg'
import instagram from '../../../assets/imgs/icons/instagram.svg'
import twitter from '../../../assets/imgs/icons/twitter.svg'
import pinterest from '../../../assets/imgs/icons/pinterest.svg'

export const footerTopLinks = [
  {id: 1, name: 'about_me', defaultMessage: 'About me', link: 'Acquaintence'},
  {id: 2, name: 'relationships', defaultMessage: 'Relationship', link: 'IAmDeveloper'},
  {id: 3, name: 'requirements', defaultMessage: 'Requirements', link: 'Requirements'},
  {id: 4, name: 'users', defaultMessage: 'Users', link: 'ShowUsers'},
  {id: 5, name: 'sign_up', defaultMessage: 'Sign Up', link: 'FormValidation'}
]

export const footerCenterPhoneEmail = [
  {id: 1, img: mail, text: 'work.of.future@gmail.com'},
  {id: 2, img: phone, text: '+38 (050) 789 24 98'},
  {id: 3, img: cellphone, text: '+38 (095) 556 08 45'}
]

export const footerCenterLinksPart = [
  {
    id: 1,
    arr: [
      {id: 'footer_center_links_news', defaultMessage: 'News'},
      {id: 'footer_center_links_blog', defaultMessage: 'Blog'},
      {id: 'footer_center_links_partners', defaultMessage: 'Partners'},
      {id: 'footer_center_links_shop', defaultMessage: 'Shop'}
    ]
  },
  {
    id: 2,
    arr: [
      {id: 'footer_center_links_overview', defaultMessage: 'Overview'},
      {id: 'footer_center_links_design', defaultMessage: 'Design'},
      {id: 'footer_center_links_code', defaultMessage: 'Code'},
      {id: 'footer_center_links_collaborate', defaultMessage: 'Collaborate'}
    ]
  },
  {
    id: 3,
    arr: [
      {id: 'footer_center_links_tutorials', defaultMessage: 'Tutorials'},
      {id: 'footer_center_links_resources', defaultMessage: 'Resources'},
      {id: 'footer_center_links_guides', defaultMessage: 'Guides'},
      {id: 'footer_center_links_examples', defaultMessage: 'Examples'}
    ]
  },
  {
    id: 4,
    arr: [
      {id: 'footer_center_links_faq', defaultMessage: 'FAQ'},
      {id: 'footer_center_links_terms', defaultMessage: 'Terms'},
      {id: 'footer_center_links_conditions', defaultMessage: 'Conditions'},
      {id: 'footer_center_links_help', defaultMessage: 'Help'}
    ]
  }
]

export const footerBottomSocieties = [
  {id: 1, name: facebook},
  {id: 2, name: linkedin},
  {id: 3, name: instagram},
  {id: 4, name: twitter},
  {id: 5, name: pinterest}
]