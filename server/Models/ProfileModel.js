const mongoose = require('mongoose');
const { use } = require('../routes/Profile');

const profileSchema = new mongoose.Schema({
  theme: {
    type: String,
    required: true,
    default: 'blue-hacker',
    enum: ['blue-hacker', 'green-hacker']
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  social: {
    type: Map,
    of: String
  },
  projects: [
    {
      name: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: false
      },
      technologies: {
        type: [String],
        required: false
      },
      github: {
        type: String,
        required: false
      }
    }
  ],
  skills: {
    languages: {
      type: [String],
      required: false
    },
    frameworks: {
      type: [String],
      required: false
    },
    databases: {
      type: [String],
      required: false
    },
    tools: {
      type: [String],
      required: false
    }
  },
  languages: {
    type: [String],
    required: false
  },
  experience: [
    {
      company: {
        type: String,
        required: false
      },
      position: {
        type: String,
        required: false
      },
      period: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      }
    }
  ],
  education: [
    {
      institution: {
        type: String,
        required: false
      },
      degree: {
        type: String,
        required: false
      },
      duration: {
        type: String,
        required: false
      },
      grade: {
        type: String,
        required: false
      }
    }
  ],
  certifications: [
    {
      title: {
        type: String,
        required: false
      },
      issuer: {
        type: String,
        required: false
      },
      year: {
        type: String,
        required: false
      },
      link: {
        type: String,
        required: false
      }
    }
  ],
  learningGoals: {
    type: [String],
    required: true
  },
  hobbies: {
    type: [String],
    required: true
  },
  interests: {
    type: [String],
    required: true
  }
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;