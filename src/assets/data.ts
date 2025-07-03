import Pado from '../assets/images/Pastor2.png'
import James from '../assets/images/james.jpg'
import Gershon from '../assets/images/Gershon.jpg'
import Dennis from '../assets/images/dennis.jpg'
import Anderson from '../assets/images/anderson.jpg'
export const slides = [
    {
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1920&h=1080&fit=crop',
      title: 'Welcome to Deliverance Church Utawala',
      subtitle: 'Experience God\'s Love',
      description: 'Join our community of believers in worship, fellowship, and spiritual growth. You are loved and welcomed here.',
      cta: 'Join Us This Sunday'
    },
    {
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop',
      title: 'Growing in Faith Together',
      subtitle: 'Unite in Prayer',
      description: 'Discover your purpose and grow in your relationship with God through our community and programs.',
      cta: 'Explore Our Programs'
    },
    {
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1920&h=1080&fit=crop',
      title: 'Serving Our Community',
      subtitle: 'Love in Action',
      description: 'Be part of something greater as we serve our community and spread God\'s love through action.',
      cta: 'Get Involved'
    }
  ];

  export const coreValues = [
    {
      icon: '❤️',
      title: 'Love',
      description: 'Demonstrating Christ-like love to all people through our actions, words, and service.'
    },
    {
      icon: '🤝',
      title: 'Fellowship',
      description: 'Building authentic relationships rooted in mutual encouragement, accountability, and unity in Christ.'
    },
    {
      icon: '🧠',
      title: 'Wisdom',
      description: 'Applying God’s truth to everyday life with discernment, understanding, and spiritual maturity.'
    },
    {
      icon: '✨',
      title: 'Holiness',
      description: 'Pursuing a life that reflects God’s character through purity, obedience, and transformation.'
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Striving to honor God by doing our best in all things with integrity, diligence, and passion.'
    }
  ];

  export const latestMessage = {
    title: 'Walking in Faith Through Difficult Times',
    pastor: 'Pastor John Mwangi',
    date: 'Sunday, June 23, 2025',
    duration: '45 minutes',
    scripture: 'Hebrews 11:1-6',
    description: 'Discover how to maintain unwavering faith even when facing life\'s greatest challenges. Learn practical steps to trust God\'s plan for your life.',
    thumbnail: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop'
  };

  export const currentSeries = {
    title: 'Living with Purpose',
    description: 'A 6-week series exploring how to discover and live out God\'s purpose for your life.',
    totalMessages: 6,
    currentWeek: 4,
    messages: [
      { week: 1, title: 'Created with Purpose', date: 'June 2, 2025' },
      { week: 2, title: 'Finding Your Calling', date: 'June 9, 2025' },
      { week: 3, title: 'Overcoming Fear', date: 'June 16, 2025' },
      { week: 4, title: 'Walking in Faith', date: 'June 23, 2025' },
      { week: 5, title: 'Serving Others', date: 'June 30, 2025' },
      { week: 6, title: 'Living Legacy', date: 'July 7, 2025' }
    ]
  };

  export const seriesArchive = [
    {
      title: 'The Heart of Worship',
      description: 'Understanding what true worship means in our daily lives.',
      messages: 5,
      year: '2025'
    },
    {
      title: 'Building Strong Relationships',
      description: 'Biblical principles for healthy relationships and marriage.',
      messages: 8,
      year: '2024'
    },
    {
      title: 'Financial Stewardship',
      description: 'Managing money according to biblical principles.',
      messages: 6,
      year: '2024'
    },
    {
      title: 'Prayer and Fasting',
      description: 'Deepening your prayer life and spiritual discipline.',
      messages: 4,
      year: '2024'
    }
  ];

  export  const leaders = [
    {
      name: 'Reverend Emmanuel & Pastor Lucy Kokonyo',
      title: 'Senior Pastor',
      image: Pado,
      description: 'Reverend Emmanuel has been serving as our Senior Pastor since 2009. He holds a Master of Divinity and brings over 15 years of ministry experience.',
      specialties: ['Biblical Teaching', 'Pastoral Care', 'Leadership Development']
    },
    {
      name: 'Pastor Anderson',
      title: 'Associate Pastor',
      image: Anderson,
      description: 'Pastor Anderson oversees our worship ministry and women\'s programs. She is passionate about building authentic community and spiritual growth.',
      specialties: ['Worship Ministry', 'Women\'s Ministry', 'Community Outreach']
    },
    {
      name: 'Pastor James and Olive Theuri',
      title: 'Associate Pastor',
      image: James,
      description: 'Elder David provides spiritual guidance and oversight to our church. He has been a faithful member and leader for over 10 years.',
      specialties: ['Church Governance', 'Counseling', 'Men\'s Ministry']
    },
    {
      name: 'Pastor David',
      title: 'Associate Pastor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Pastor David leads our vibrant youth ministry, organizing programs that help young people grow in their faith and discover their purpose.',
      specialties: ['Youth Ministry', 'Children\'s Programs', 'Youth Evangelism']
    },
    {
      name: 'Pastor TD Kirogo',
      title: 'Associate Pastor',
      image: Dennis,
      description: 'Brother Peter leads our worship team and music ministry. His heart for worship creates an atmosphere where people can encounter God.',
      specialties: ['Music Ministry', 'Worship Leading', 'Team Building']
    },
    {
      name: 'Pastor Gershon',
      title: 'Youth Ministry',
      image: Gershon,
      description: 'Sister Ruth oversees our children\'s ministry and Sunday school programs, ensuring our young ones learn about God\'s love in age-appropriate ways.',
      specialties: ['Children\'s Ministry', 'Sunday School', 'Family Programs']
    }
  ];

  export const departments = [
    {
      title: 'Praise and Worship',
      description: 'Leading the congregation in heartfelt worship and creating an atmosphere where people can encounter God through music and song.',
      leader: 'Brother Peter Ochieng',
      activities: ['Sunday Worship', 'Choir Practice', 'Special Events', 'Music Training'],
      meetingTime: 'Saturdays 4:00 PM'
    },
    {
      title: 'Media Ministry',
      description: 'Capturing and sharing God\'s work through photography, videography, and live streaming to reach both local and online congregations.',
      leader: 'Sister Jane Wanjiku',
      activities: ['Live Streaming', 'Photography', 'Video Production', 'Social Media'],
      meetingTime: 'Wednesdays 6:00 PM'
    },
    {
      title: 'Ushering Ministry',
      description: 'Welcoming guests with love and ensuring everyone feels at home while maintaining order during services.',
      leader: 'Brother James Kiprotich',
      activities: ['Guest Welcome', 'Seating Coordination', 'Offering Collection', 'Service Support'],
      meetingTime: 'Sundays 8:30 AM'
    },
    {
      title: 'Protocol Ministry',
      description: 'Ensuring smooth flow of services and events while maintaining dignity and order in all church activities.',
      leader: 'Sister Grace Muthoni',
      activities: ['Service Coordination', 'Event Planning', 'Guest Relations', 'Ceremony Management'],
      meetingTime: 'Fridays 7:00 PM'
    },
    {
      title: 'Security Ministry',
      description: 'Providing a safe and secure environment for all church members and visitors during services and events.',
      leader: 'Brother Samuel Omondi',
      activities: ['Facility Security', 'Parking Management', 'Emergency Response', 'Safety Protocols'],
      meetingTime: 'Sundays 9:00 AM'
    },
    {
      title: 'Youth Ministry',
      description: 'Empowering young people to grow in their faith while providing mentorship, fellowship, and leadership opportunities.',
      leader: 'Sister Mary Njeri',
      activities: ['Youth Worship', 'Mentorship Programs', 'Life Skills Training', 'Community Outreach'],
      meetingTime: 'Fridays 6:00 PM'
    },
    {
      title: 'Sunday School Ministry',
      description: 'Teaching children and adults the Word of God through age-appropriate lessons that build strong biblical foundations.',
      leader: 'Sister Ruth Akinyi',
      activities: ['Children Classes', 'Adult Classes', 'Bible Study', 'Memory Verses'],
      meetingTime: 'Sundays 9:00 AM'
    }
  ];

  export const facilities = [
    {
      title: 'Early Learning Program',
      ageGroup: 'Ages 2-5',
      description: 'Nurturing young minds with Christian values and foundational learning skills.',
      features: ['Play-based Learning', 'Christian Values', 'Qualified Teachers', 'Safe Environment']
    },
    {
      title: 'Primary Education',
      ageGroup: 'Ages 6-12',
      description: 'Comprehensive primary education combining academic excellence with spiritual growth.',
      features: ['CBC Curriculum', 'Small Class Sizes', 'Extracurricular Activities', 'Moral Education']
    },
    // {
    //   title: 'After School Care',
    //   ageGroup: 'All Ages',
    //   description: 'Extended care services for working parents with homework support and activities.',
    //   features: ['Homework Assistance', 'Recreational Activities', 'Nutritious Meals', 'Flexible Hours']
    // }
  ];

  export const achievements = [
    {
      number: '200+',
      label: 'Happy Students'
    },
    {
      number: '15',
      label: 'Qualified Teachers'
    },
    {
      number: '10',
      label: 'Years of Excellence'
    },
    {
      number: '98%',
      label: 'Parent Satisfaction'
    }
  ];

  export const givingOptions = [
      {
        id: 'tithe',
        title: 'Tithes',
        description: 'Your regular tithe offering to support the church ministry and operations.',
        verse: '"Bring the whole tithe into the storehouse..." - Malachi 3:10'
      },
      {
        id: 'offering',
        title: 'General Offering',
        description: 'Additional offerings to support various church programs and activities.',
        verse: '"Each of you should give what you have decided in your heart to give..." - 2 Corinthians 9:7'
      },
      {
        id: 'building',
        title: 'Building Fund',
        description: 'Special donations to support our church building and infrastructure projects.',
        verse: '"Unless the Lord builds the house, the builders labor in vain." - Psalm 127:1'
      },
      {
        id: 'missions',
        title: 'Missions',
        description: 'Support our local and international mission work and outreach programs.',
        verse: '"Go and make disciples of all nations..." - Matthew 28:19'
      }
    ];
  
    export const paymentMethods = [
      {
        method: 'M-Pesa',
        details: 'Paybill: 891300\nAccount: Your Name',
        icon: '📱'
      },
      {
        method: 'Bank Transfer',
        details: 'Bank: KCB Bank\nAccount: 1234567890\nName: Deliverane Church Utawala',
        icon: '🏦'
      },
      {
        method: 'Cash/Cheque',
        details: 'During service or at the church office\nOffice Hours: Mon-Fri 9AM-5PM',
        icon: '💰'
      }
    ];