const app = Vue.createApp({
  data() {
    return {
      links: [
        { text: 'Home', url: '#' },
        { text: 'About', url: '#about' },
        { text: 'Service', url: '#service' },
        { text: 'Contact', url: '#contact' }
      ],
      isMenuOpen: false,
      personImage: './images/person.png', 
      service: 'WHAT WE OFFER', 
      serviceNote: `Embark on a journey to strengthen your relationships and enrich your 
      life. Discover our array of transformative services designed to align with God's principles for dating, relationships, and marriage. 
      Click below to explore offerings that lead to enduring connections and purposeful living.`,
      btnText: 'Explore Offerings',
      services: [
        {
          name: 'Mentorship Training',
          image: './images/pro1.jpg',
          description: `Get trained in having the accurate knowledge in regards to relationships and marriage.
          Additionally, this training will launch you as a certified counselor should you have a calling and path in counseling.
          And lastly, you'll be under a month (free) internship program to showcase what and how much you've learned.`,
          url: 'https://mainstack.store/gbr/2HxVbG3qhfLQ',
          showDescription: false,
        },
        {
          name: 'Maraige Preperatory Course',
          image: './images/pro3.jpg',
          description: `Having received messages from across a number of young people asking about how they can be prepared
           for marriage or understand how to be ready for marriage, is a major reason why this course has been created.
          I want to see that young people are able to understand and accurately know His will and walk in it. This
           course is timeless and resourceful in helping any single, and young person prepare adequately for marriage..`,
          url: 'https://mainstack.store/gbr/FyTgc7DG_NjY',
          showDescription: false,
          
        },
        {
          name: 'Counseling Services',
          image: './images/pro2.jpg',
          description: `
          Weekly Marital Confessions ebook is a powerful tool to empower singles make bold confessions for their marriages to reconnect their hearts to love, be free from gamophobia and receive heal
          ing from past hurtful relationships into the marriage of their dreams godly 
          and beautiful. The married can get it as well to rekindle their marital confessions.
          .`,
          url: 'https://mainstack.store/gbr/WiftTTXFg3wV',
          showDescription: false,
          
        },
        {
          name: 'Recovery and Accountability session',
          image: './images/rec.jpg',
          description: `
          This is strategically designed to help you heal from past hurt, abuse, trauma
          and embrace a new beginning and future in Christ to have healthy and happy relationships.  
          `,
          url: 'https://mainstack.store/gbr/FyTgc7DG_NjY',
          showDescription: false,
          
        },
      ],
      podcast:'PODCASTS',
      podNote: `
Immerse yourself in enriching discussions on relationships, faith, and purpose
 with our captivating podcasts. Join Pricilla Eziwan and guests as they share wisdom,
  personal experiences, and practical advice. Tune in to the audio journey for insightful
   conversations on navigating relationships God's way.
  

      `,
      podcasts: [
        {
          name: 'Dealing With Your Sexuality Struggle',
          image: './images/dealing.jpg',
          description: 'But when you ask God for something, you must trust him completely. Do not have other ideas in your mind. People who are not sure that God will help them are like the waves in the sea. The wind blows the water one way and then it blows the water another way. A person who is like that never knows what to do. He has many ideas in his mind. He should not think that he will receive anything from the Lord.',
          url: 'https://podcasters.spotify.com/pod/show/priscilla-eziwan/episodes/Dealing-With-Your-Sexuality-Struggle-e29m38o',
          showDescription: false,
        },
        {
          name: 'Low self-esteem',
          image: './images/Low.jpg',
          description: 'And yet, O Lord , you are our Father. We are the clay, and you are the potter. We all are formed by your hand.',
          url: 'https://podcasters.spotify.com/pod/show/priscilla-eziwan/episodes/Low-self-esteem-e1vrjb5',
          showDescription: false,
        },
        {
          name: 'Purity: Wholesome Sexuality',
          image: './images/Purity.jpg',
          description: 'because it is written, “You shall be holy (set apart), for I am holy." ',
          url: 'https://podcasters.spotify.com/priscilla-eziwan/episodes/Purity-Wholesome-Sexuality-e2aiiet',
          showDescription: false,
        },
        {
          name: 'Youthful Exuberance!',
          image: './images/Youth.jpg',
          description: 'Being youthful and exuberant is not bad in itself, but the end point of where and how it is channeled determines whether every exploration springs wellness to the adventurer.',
          url: 'https://podcasters.spotify.com/pod/show/priscilla-eziwan/episodes/Youthful-Exuberance-e19s8aa',
          showDescription: false,
        },
        // Add more podcasts as needed
      ],
      currentServiceImg: 0,
      serviceSliderTimeout: null,
      
    };
  },
  methods: {
    toggleServiceDescription(index) {
      this.services[index].showDescription = !this.services[index].showDescription;
    },
    togglePodcastDescription(index) {
      this.podcasts[index].showDescription = !this.podcasts[index].showDescription;
    },
      openAdminWhatsAppChat() {
        // Replace 'admin_whatsapp_number' with the actual WhatsApp number of the admin
        window.open('https://wa.me/message/ZHSVAUAJRHFOJ1', '_blank');
      },
      toggleNav() {
        this.navActive = !this.navActive;
      },
      showMenu() {
        this.isMenuOpen = true;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      
      refreshPage() {
        // Reload the page
        location.reload();
      },
    
    
      
    },
    

  
});


app.mount('#app');