/**
 * Detailed content for each project's case-study page.
 * Ported 1-to-1 from legacy/works/*.html.
 *
 * Blocks render in order. A block can include any combination of
 * heading, description, image (with optional caption), or video.
 */

export interface AboutItem {
  /** Optional sub-heading inside the About card (e.g. "My Role") */
  heading?: string
  text: string
}

export interface DetailBlock {
  heading?: string
  description?: string
  image?: string
  imageCaption?: string
  /** YouTube embed URL */
  video?: string
}

export interface ProjectDetail {
  slug: string
  subtitle: string
  about: AboutItem[]
  blocks: DetailBlock[]
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'jukebox',
    subtitle: 'Intranet Music Player Of IIT Roorkee',
    about: [
      {
        text: 'Jukebox is the intranet music player of IIT Roorkee. It gives you quick access to a vast collection of music from all time and genres. The design is minimalistic, simple and precisely based on good user experience and interaction.',
      },
      {
        heading: 'My Role',
        text: 'Designed and Developed the User Interface. Worked closely with the backend team. Improved the UX after carefully considering various use cases with significant number of iterations in both design and code. Worked on pixel perfect design, gave sufficient time in detailing the various UI components.',
      },
      {
        heading: 'Team',
        text: 'Nitesh Kumar (Mentor & Designer), Pankaj Gudlani (Backend Developer), Himanshu Jariyal (Designer & Frontend Developer)',
      },
      {
        heading: 'Tools / Technologies',
        text: 'Adobe Photoshop, HTML5, CSS3, JS, jQuery, Git, Vim, Linux Environment, Soundmanager',
      },
    ],
    blocks: [
      {
        heading: 'Trending',
        description:
          'Your home screen shows top 50 tracks. Try dragging a song to your play queue.',
        image: '/images/jukebox/trending.PNG',
      },
      {
        heading: 'Artist',
        description:
          'Every artist has a collection of all his albums. Click on an album art to play the entire album.',
        image: '/images/jukebox/artist.PNG',
      },
      {
        heading: 'Album',
        description:
          'The album view shows all the songs in a single album. Drag the album art to the play queue to play the entire album.',
        image: '/images/jukebox/album.PNG',
      },
      {
        heading: 'Playlist',
        description:
          'All your favourite music in one place. Share and explore other users\u2019 playlists.',
        image: '/images/jukebox/shared_playlist.PNG',
      },
      {
        heading: 'Quick Search',
        description:
          'The quick search view shows the top 5 search results in each category — Songs, Albums and Artists. Just start typing to get quick search results.',
        image: '/images/jukebox/search.PNG',
      },
      {
        heading: 'Full Search',
        description:
          'The full search view shows all the songs, albums and artists related to a search string.',
        image: '/images/jukebox/searchFull.PNG',
      },
      {
        heading: 'Save Playlist',
        description:
          'Popup dialog box allowing the user to save as an existing playlist or create a new playlist.',
        image: '/images/jukebox/save.PNG',
      },
      {
        heading: 'Feedback',
        description:
          'We have around 1000 daily users listening to music on Jukebox (thanks to Piwik) and we highly value their feedback.',
        image: '/images/jukebox/feedback.PNG',
      },
      {
        heading: 'Facebook Cover Pic',
        image: '/images/jukebox/jukebox_poster.jpg',
        imageCaption: 'Designed by Nitesh Kumar',
      },
      {
        heading: 'Video Demo',
        description:
          'This is an intranet application which is only for students of IIT Roorkee, so here\u2019s a video demo of what the experience feels like.',
        video: 'https://www.youtube.com/embed/Dz6lGXJxhLc',
      },
    ],
  },

  {
    slug: 'lectut',
    subtitle: 'Online Study Portal of IIT Roorkee',
    about: [
      {
        text: 'Lectut (Lectures & Tutorials) is the online study portal of IIT Roorkee, used by around 8000 students to upload and download lectures, tutorials, solutions and exam papers.',
      },
      {
        heading: 'My Role',
        text: 'Only designer to work on the complete redesign of the application and coding the interface.',
      },
      {
        heading: 'Team',
        text: 'Harshit Chopra (Backend Developer), Himanshu Jariyal (Designer & Frontend Developer)',
      },
      {
        heading: 'Tools / Technologies',
        text: 'Adobe Photoshop, HTML5, CSS3, SASS, JS, AngularJS, Git, Yeoman, Grunt, Bower, Vim, Linux Environment',
      },
    ],
    blocks: [
      {
        heading: 'Home',
        description: 'Common feed showing the latest activity in all your courses.',
        image: '/images/lectut/common_feed.png',
      },
      {
        heading: 'Course Feed',
        description:
          'Feed displaying previously posted items in selected course. Logged in users can create a new post.',
        image: '/images/lectut/course_feed.png',
      },
      {
        heading: 'Create Post',
        description: 'Option to attach files in a post.',
        image: '/images/lectut/add_files.png',
      },
      {
        heading: 'Attached Files',
        description:
          'Different colors to differentiate easily between Lectures, Tutorials, Exam Papers and Solutions.',
        image: '/images/lectut/create_post.png',
      },
      {
        heading: 'Course Files',
        description:
          'List of all the files added in a course with uploader name, number of downloads and upload date.',
        image: '/images/lectut/course_files.png',
      },
      {
        heading: 'Filters, Search, Sorting',
        description:
          'Quick searching, sorting files according to file name, course name or share date. Filter results using course name or upload type.',
        image: '/images/lectut/lect_tut_filter.png',
      },
      {
        heading: 'Comments',
        image: '/images/lectut/comments.png',
      },
      {
        heading: 'Quick Search',
        description:
          'Fast search showing at most five results in each category i.e. Faculty, Courses, Files and Posts.',
        image: '/images/lectut/search.png',
      },
      {
        heading: 'Popups: Confirm, Success, Cancelled',
        description:
          'Popup dialog box to confirm an action. (Used SweetAlert for alerts.)',
        image: '/images/lectut/confirm.png',
      },
      { image: '/images/lectut/success.png' },
      { image: '/images/lectut/cancel.png' },
      {
        heading: 'Release Poster',
        image: '/images/lectut/lectut_poster.png',
        imageCaption: 'Designed by Amlan Baishya',
      },
    ],
  },

  {
    slug: 'merchant-panel',
    subtitle: 'Minimal functionality POS.',
    about: [
      {
        heading: 'Company Profile',
        text: 'Grofers is an on-demand, hyper-local delivery service that connects consumers with their local merchants and is currently operating in 27 cities.',
      },
      {
        heading: 'Project Description',
        text: 'Develop a web application where merchants can manage their inventory and track / bill incoming orders.',
      },
      {
        heading: 'My Role',
        text: 'Carried out research on user experience and interaction, UI/UX design, and implemented the Frontend from scratch — working closely with the backend team to integrate the final product.',
      },
      {
        heading: 'Team',
        text: 'Madhukar Mishra (Mentor & Backend Developer) and Himanshu Jariyal (Designer & Frontend Developer)',
      },
      {
        heading: 'Tech Stack: Frontend',
        text: 'HTML5, CSS3, JS, AngularJS, Git, Yeoman, Grunt, Bower, Sublime Text, Mac OS',
      },
    ],
    blocks: [
      {
        heading: 'Profile',
        description: "Merchant's profile page.",
        image: '/images/merchant/profile.png',
      },
      {
        heading: 'Store Info',
        description: 'Store information view. Can edit store info.',
        image: '/images/merchant/store_info.png',
      },
      {
        heading: 'Stores List',
        description: 'List of all the stores with details that a particular merchant owns.',
        image: '/images/merchant/stores_list.png',
      },
      {
        heading: 'Products',
        description: 'List of all the products present in a store.',
        image: '/images/merchant/products.png',
      },
      {
        heading: 'Edit Product',
        description: 'Product editing inline within the list.',
        image: '/images/merchant/edit_product.png',
      },
      {
        heading: 'Add Product',
        description: 'Form to add a new product.',
        image: '/images/merchant/add_product.png',
      },
      {
        heading: 'All Products List',
        image: '/images/merchant/add_from_existing.png',
      },
      {
        heading: 'Map Product',
        image: '/images/merchant/set_price.png',
      },
    ],
  },

  {
    slug: 'inventory-mapper',
    subtitle: 'Product management system.',
    about: [
      {
        heading: 'Company Profile',
        text: 'Grofers is an on-demand, hyper-local delivery service that connects consumers with their local merchants and is currently operating in 27 cities.',
      },
      {
        heading: 'Problem Statement',
        text: 'Grofers has a large database of products which is constantly being updated. During addition there was large duplicity in products.',
      },
      {
        heading: 'Solution',
        text: 'Create a web based application to show the items and provide limited filtered results to the end user. A way to keep track of current progress and save the progress, initially in browser localStorage.',
      },
      {
        heading: 'Process Followed',
        text: 'Carried out research on the previous flow used to do the same thing and thought of ideas on how to make this whole process fast and user friendly. Personally used the product with the content team and took their feedback. Implemented the product using AngularJS for frontend, with tools like Yeoman, Grunt & Bower to make the process robust and fast.',
      },
      {
        heading: 'Team',
        text: 'Madhukar Mishra (Mentor & Backend Developer) and Himanshu Jariyal (Designer & Frontend Developer)',
      },
      {
        heading: 'Tech Stack: Frontend',
        text: 'HTML5, CSS3, JS, AngularJS, Git, Yeoman, Grunt, Bower, Sublime Text, Mac OS',
      },
    ],
    blocks: [
      {
        heading: 'Upload Excel',
        description: 'Excel file input. Uploaded sheet name and number of rows.',
        image: '/images/inventory/upload_excel.png',
      },
      {
        heading: 'Wrong Format',
        description: 'Throws error on any other file type upload.',
        image: '/images/inventory/wrong_format.png',
      },
      {
        heading: 'Uploaded Sheet Data',
        description:
          'Listing the data in the uploaded sheet with extra columns in each row for New Price, Product Id to be mapped and mapped product details. Double-clicking on a row searches the DB for related products and updates the Search Table data. Grid data can be edited by clicking the grey cells.',
        image: '/images/inventory/user_sheet.png',
      },
      {
        heading: 'Search Results',
        description:
          'Top 50 search results from DB shown in a grid with a filter in each column. Custom search by Product Name and Category Id.',
        image: '/images/inventory/search_results.png',
      },
      {
        heading: 'Pagination',
        description: 'Angular UI Grid utility.',
        image: '/images/inventory/pagination.png',
      },
    ],
  },

  {
    slug: 'join-img',
    subtitle: 'Recruitment page.',
    about: [
      {
        text: 'Static page for IMG (Information Management Group) recruitments.',
      },
    ],
    blocks: [
      { heading: 'Home', image: '/images/join_img/home.png' },
      { heading: 'Exam Notice', image: '/images/join_img/recruitment.png' },
      { heading: 'Schedule', image: '/images/join_img/schedule.png' },
      { heading: "FAQ's", image: '/images/join_img/faq.png' },
    ],
  },
]

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug)
}
