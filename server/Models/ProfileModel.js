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
        required: true
      },
      description: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: false
      },
      technologies: {
        type: [String],
        required: true
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
      required: true
    },
    frameworks: {
      type: [String],
      required: true
    },
    databases: {
      type: [String],
      required: true
    },
    tools: {
      type: [String],
      required: true
    }
  },
  languages: {
    type: [String],
    required: true
  },
  experience: [
    {
      company: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      },
      period: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  education: [
    {
      institution: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      grade: {
        type: String,
        required: true
      }
    }
  ],
  certifications: [
    {
      title: {
        type: String,
        required: true
      },
      issuer: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
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