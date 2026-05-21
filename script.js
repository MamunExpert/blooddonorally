    // ==============================
    // Donor Database
    // সব donor information এখানে store করা হয়েছে
    // ==============================
    const donors = [

      { name: "Md Harun", blood: "A+", photo: "https://i.ibb.co.com/hF4KxdT3/harun.jpg", profession: "Director of HPC", location: "Savar, Dhaka", age: 24, phone: "+8801733*******", messenger: "md.harun.293247", verified: true },
      { name: "Md Akram Hossain", blood: "AB+", photo: "https://i.postimg.cc/ryZjpQ8D/akramh.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 24, phone: "+8801820*******", messenger: "mdakramhossain.romjan", verified: true },
      { name: "Suhag Mia", blood: "O-", photo: "https://i.postimg.cc/76kH03wM/suhag.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 28, phone: "+8801958******", messenger: "s.d.suhag.khan.2025", verified: true },
      { name: "Iqbal Baher Robin", blood: "B+", photo: "https://i.ibb.co.com/xttPgq9d/ibrobin.jpg", profession: "Entrepreneur", location: "Mawna, Sreepur, Gazipur", age: 40, phone: "+8801711-223344", messenger:"", verified: true },
      { name: "Nusrat Jahan", blood: "B+", photo: "https://randomuser.me/api/portraits/women/44.jpg", profession: "Medical Student", location: "Chittagong, Bangladesh", age: 24, phone: "+8801812-556677", verified: true },
      { name: "Karim Hasan", blood: "O+", photo: "https://randomuser.me/api/portraits/men/45.jpg", profession: "Business Analyst", location: "Khulna, Bangladesh", age: 29, phone: "+8801911-998877", verified: false },
      { name: "Fatema Akter", blood: "AB+", photo: "https://randomuser.me/api/portraits/women/68.jpg", profession: "Graphic Designer", location: "Sylhet, Bangladesh", age: 27, phone: "+8801611-445566", verified: true },
      { name: "Tanvir Hossain", blood: "A-", photo: "https://randomuser.me/api/portraits/men/51.jpg", profession: "Civil Engineer", location: "Rajshahi, Bangladesh", age: 31, phone: "+8801633-778899", verified: true },
      { name: "Sadia Islam", blood: "B-", photo: "https://randomuser.me/api/portraits/women/55.jpg", profession: "Teacher", location: "Barisal, Bangladesh", age: 25, phone: "+8801555-667788", verified: false },
      { name: "Shafiq Rahman", blood: "O-", photo: "https://randomuser.me/api/portraits/men/67.jpg", profession: "Doctor", location: "Dhaka, Bangladesh", age: 33, phone: "+8801712-334455", verified: true },
      { name: "Priya Das", blood: "A+", photo: "https://randomuser.me/api/portraits/women/33.jpg", profession: "University Student", location: "Comilla, Bangladesh", age: 22, phone: "+8801822-445566", verified: false },
      { name: "Arif Khan", blood: "B+", photo: "https://randomuser.me/api/portraits/men/22.jpg", profession: "Bank Officer", location: "Gazipur, Bangladesh", age: 28, phone: "+8801913-556677", verified: true },
      { name: "Nadia Sultana", blood: "AB-", photo: "https://randomuser.me/api/portraits/women/65.jpg", profession: "Pharmacist", location: "Sylhet, Bangladesh", age: 26, phone: "+8801614-778899", verified: true },
      { name: "Rakibul Islam", blood: "O+", photo: "https://randomuser.me/api/portraits/men/88.jpg", profession: "Police Officer", location: "Chittagong, Bangladesh", age: 35, phone: "+8801715-889900", verified: false },
      { name: "Meherun Nisa", blood: "A-", photo: "https://randomuser.me/api/portraits/women/90.jpg", profession: "Nurse", location: "Rajshahi, Bangladesh", age: 29, phone: "+8801816-990011", verified: true },
      { name: "Sohel Rana", blood: "B-", photo: "https://randomuser.me/api/portraits/men/12.jpg", profession: "Teacher", location: "Khulna, Bangladesh", age: 30, phone: "+8801917-112233", verified: false },
      { name: "Lamia Akter", blood: "O-", photo: "https://randomuser.me/api/portraits/women/25.jpg", profession: "Journalist", location: "Dhaka, Bangladesh", age: 24, phone: "+8801628-334455", verified: true },
      { name: "Imran Hossain", blood: "AB+", photo: "https://randomuser.me/api/portraits/men/41.jpg", profession: "Entrepreneur", location: "Barisal, Bangladesh", age: 32, phone: "+8801719-556677", verified: true },
      { name: "Sabrina Chowdhury", blood: "A+", photo: "https://randomuser.me/api/portraits/women/52.jpg", profession: "Software Developer", location: "Chittagong, Bangladesh", age: 25, phone: "+8801820-778899", verified: false },
      { name: "Fahim Ahmed", blood: "B+", photo: "https://randomuser.me/api/portraits/men/63.jpg", profession: "Lawyer", location: "Dhaka, Bangladesh", age: 34, phone: "+8801921-990011", verified: true },
      { name: "Tania Rahman", blood: "O+", photo: "https://randomuser.me/api/portraits/women/71.jpg", profession: "Housewife", location: "Sylhet, Bangladesh", age: 28, phone: "+8801622-112233", verified: false },
      { name: "Mahmudul Hasan", blood: "A-", photo: "https://randomuser.me/api/portraits/men/19.jpg", profession: "Farmer", location: "Rajshahi, Bangladesh", age: 36, phone: "+8801723-334455", verified: true },
      { name: "Anika Islam", blood: "AB-", photo: "https://randomuser.me/api/portraits/women/48.jpg", profession: "Marketing Executive", location: "Khulna, Bangladesh", age: 23, phone: "+8801824-556677", verified: true },
      { name: "Sumon Khan", blood: "O+", photo: "https://randomuser.me/api/portraits/men/33.jpg", profession: "Teacher", location: "Dhaka, Bangladesh", age: 31, phone: "+8801714-112233", verified: true },
      { name: "Rina Begum", blood: "A-", photo: "https://randomuser.me/api/portraits/women/29.jpg", profession: "Housewife", location: "Chittagong, Bangladesh", age: 28, phone: "+8801815-445566", verified: false },
      { name: "Jahangir Alam", blood: "B+", photo: "https://randomuser.me/api/portraits/men/55.jpg", profession: "Businessman", location: "Rajshahi, Bangladesh", age: 37, phone: "+8801916-778899", verified: true },
      { name: "Mousumi Akter", blood: "AB+", photo: "https://randomuser.me/api/portraits/women/77.jpg", profession: "Doctor", location: "Sylhet, Bangladesh", age: 29, phone: "+8801617-990011", verified: true },
      { name: "Nasir Uddin", blood: "O-", photo: "https://randomuser.me/api/portraits/men/66.jpg", profession: "Engineer", location: "Khulna, Bangladesh", age: 34, phone: "+8801718-223344", verified: false },
      { name: "Shirin Parveen", blood: "B-", photo: "https://randomuser.me/api/portraits/women/35.jpg", profession: "Student", location: "Barisal, Bangladesh", age: 23, phone: "+8801819-556677", verified: true },
      { name: "Kamal Hossain", blood: "A+", photo: "https://randomuser.me/api/portraits/men/77.jpg", profession: "Government Officer", location: "Dhaka, Bangladesh", age: 35, phone: "+8801920-889900", verified: true },
      { name: "Farhana Islam", blood: "AB-", photo: "https://randomuser.me/api/portraits/women/42.jpg", profession: "Lecturer", location: "Comilla, Bangladesh", age: 27, phone: "+8801621-334455", verified: false },
      { name: "Abdullah Al Mamun", blood: "O+", photo: "https://randomuser.me/api/portraits/men/91.jpg", profession: "Shop Owner", location: "Gazipur, Bangladesh", age: 32, phone: "+8801722-667788", verified: true },
      { name: "Jesmin Ara", blood: "A-", photo: "https://randomuser.me/api/portraits/women/61.jpg", profession: "Nurse", location: "Rajshahi, Bangladesh", age: 26, phone: "+8801823-990011", verified: true },
      { name: "Rashed Khan", blood: "B+", photo: "https://randomuser.me/api/portraits/men/24.jpg", profession: "Driver", location: "Chittagong, Bangladesh", age: 38, phone: "+8801924-112233", verified: false },
      { name: "Sultana Parvin", blood: "O-", photo: "https://randomuser.me/api/portraits/women/83.jpg", profession: "Social Worker", location: "Sylhet, Bangladesh", age: 30, phone: "+8801625-445566", verified: true },
      { name: "Habibur Rahman", blood: "AB+", photo: "https://randomuser.me/api/portraits/men/39.jpg", profession: "Accountant", location: "Dhaka, Bangladesh", age: 29, phone: "+8801726-778899", verified: true },
      { name: "Nusrat Tabassum", blood: "A+", photo: "https://randomuser.me/api/portraits/women/19.jpg", profession: "Fashion Designer", location: "Khulna, Bangladesh", age: 24, phone: "+8801827-990011", verified: false },
      { name: "Saifuddin Ahmed", blood: "B-", photo: "https://randomuser.me/api/portraits/men/74.jpg", profession: "Journalist", location: "Barisal, Bangladesh", age: 33, phone: "+8801928-223344", verified: true },
      { name: "Mita Rani", blood: "O+", photo: "https://randomuser.me/api/portraits/women/94.jpg", profession: "Pharmacist", location: "Rajshahi, Bangladesh", age: 27, phone: "+8801629-556677", verified: true }
    ];

    // ==============================
    // Global Variables
    // Donor rendering control variables
    // ==============================

    // বর্তমানে কতজন donor show হচ্ছে
    let displayedCount = 0;

    // Filter করার পর donor list এখানে store হবে
    let currentFilteredDonors = [];


    // ==============================
    // Create Donor Card Function
    // Dynamic donor card generate করার function
    // ==============================
    function createCard(d) {

      // Template string return করা হচ্ছে
      return `

        <div class="card">

          <!-- Verified Badge -->
          <!-- যদি donor verified হয় তাহলে badge show হবে -->
          ${d.verified
            ? `<div class="verified">
                 <i class="fas fa-check-circle"></i>
                 Verified
               </div>`
            : ''
          }

          <!-- Donor Image Section -->
          <div class="photo-container">

            <!-- Donor Photo -->
            <!-- loading="lazy" performance improve করে -->
            <!-- image error হলে placeholder image show হবে -->
            <img
              src="${d.photo}"
              class="photo"
              alt="${d.name}"
              loading="lazy"
              onerror="this.src='https://via.placeholder.com/130?text=Donor'"
            >

            <!-- Blood Group Badge -->
            <div class="blood-badge">
              ${d.blood}
            </div>

          </div>


          <!-- Donor Name -->
          <h3 class="name">
            ${d.name}
          </h3>


          <!-- Profession -->
          <p class="profession">
            ${d.profession}
          </p>


          <!-- Location -->
          <div class="info-row">

            <i class="fas fa-map-marker-alt"></i>

            ${d.location}

          </div>


          <!-- Age -->
          <div class="info-row">

            <i class="fas fa-user"></i>

            ${d.age} Years Old

          </div>


          <!-- Phone Number -->
          <div class="info-row">

            <i class="fas fa-phone"></i>

            ${d.phone}

          </div>


          <!-- Availability Status -->
          <div class="status">

            <i class="fas fa-circle"></i>

            Available For Emergency

          </div>


          <!-- Action Buttons -->
          <div class="actions">

            <!-- Call Button -->
            <button
              class="call-btn"
              onclick="callDonor('${d.phone}', '${d.name}')"
            >

              <i class="fas fa-phone"></i>

              Call

            </button>


            <!-- Copy Phone Button -->
            <button
              class="social-btn"
              onclick="copyPhone('${d.phone}')"
            >

              <i class="fas fa-copy"></i>

            </button>


            <!-- WhatsApp Button -->
            <!-- Phone number modify করে WhatsApp link তৈরি -->
            <a
              href="https://wa.me/${d.phone.replace('+880', '880')}"
              target="_blank"
              class="social-btn"
              title="Chat on WhatsApp"
            >

              <i class="fab fa-whatsapp"></i>

            </a>


            <!-- Messenger Button -->
            <!-- Messenger username থাকলে link তৈরি হবে -->
            <a
              href="https://m.me/${d.messenger || ''}"
              target="_blank"
              class="social-btn"
              title="Chat on Messenger"
            >

              <i class="fab fa-facebook-messenger"></i>

            </a>

          </div>

        </div>

      `;
    }
    
    // ==============================
    // Initial Donor Card Render
    // প্রথমবার donor card show করার function
    // ==============================
    function renderInitial() {

      // সব donor copy করে filtered array তে রাখা
      currentFilteredDonors = [...donors];

      // প্রথমে 15 জন donor show হবে
      displayedCount = 15;

      // Card container select করা
      const container = document.getElementById('cardsContainer');

      // পুরানো card clear করা
      container.innerHTML = '';

      // প্রথম 15 donor slice করে নেওয়া
      const toShow = currentFilteredDonors.slice(0, 15);

      // Donor card dynamically add করা
      toShow.forEach(d => {
        container.insertAdjacentHTML('beforeend', createCard(d));
      });

      // Smooth animation delay দিয়ে card visible করা
      setTimeout(() => {

        // Donor heading visible করা
        document.querySelector('.donors-heading').classList.add('visible');

        // সব card animation apply করা
        document.querySelectorAll('#donors .card').forEach((card, i) => {

          // প্রতি card এ animation delay
          card.style.transitionDelay = `${i * 90}ms`;

          // Visible class add করা
          card.classList.add('visible');

        });

      }, 800);

      // See More button show করা
      document.getElementById('seeMoreContainer').style.display = 'block';
    }


    // ==============================
    // Load More Donors Function
    // নতুন donor card load করার function
    // ==============================
    function loadMoreDonors() {

      // Current start index
      const start = displayedCount;

      // Maximum 15 donor একবারে load হবে
      const end = Math.min(start + 15, currentFilteredDonors.length);

      // যদি আর donor না থাকে তাহলে stop
      if (start >= end) return;

      // Container select করা
      const container = document.getElementById('cardsContainer');

      // নতুন donor list নেওয়া
      const newDonors = currentFilteredDonors.slice(start, end);

      // নতুন card add করা
      newDonors.forEach(d =>
        container.insertAdjacentHTML('beforeend', createCard(d))
      );

      // Animation দিয়ে visible করা
      setTimeout(() => {

        const cards = document.querySelectorAll('#donors .card');

        for (let i = start; i < cards.length; i++) {

          cards[i].classList.add('visible');

        }

      }, 50);

      // Display count update করা
      displayedCount = end;

      // সব donor load হয়ে গেলে button hide
      if (displayedCount >= currentFilteredDonors.length) {

        document.getElementById('seeMoreContainer').style.display = 'none';

      }
    }


    // ==============================
    // Donor Filter Function
    // Name, Location & Blood Group দিয়ে search
    // ==============================
    function filterDonors() {

      // Input value lowercase করে নেওয়া
      const name = document.getElementById('searchName')
        .value.toLowerCase().trim();

      const loc = document.getElementById('searchLocation')
        .value.toLowerCase().trim();

      // Blood group value নেওয়া
      const blood = document.getElementById('bloodGroup').value;

      // Donor filter logic
      currentFilteredDonors = donors.filter(d => {

        // Name match check
        const matchName =
          !name || d.name.toLowerCase().includes(name);

        // Location match check
        const matchLocation =
          !loc || d.location.toLowerCase().includes(loc);

        // Blood group match check
        const matchBlood =
          !blood || d.blood === blood;

        // সব condition true হলে donor return হবে
        return matchName && matchLocation && matchBlood;

      });

      // আবার শুরু থেকে count reset
      displayedCount = 0;

      // পুরানো card clear করা
      document.getElementById('cardsContainer').innerHTML = '';

      // See More button আবার show করা
      document.getElementById('seeMoreContainer').style.display = 'block';

      // Filtered donor load করা
      loadMoreDonors();
    }


    // ==============================
    // Smooth Navigation Function
    // Navbar section smoothly scroll করার জন্য
    // ==============================
    function navigateToSection(el) {

      // href থেকে target id নেওয়া
      const targetId = el.getAttribute('href').substring(1);

      // Target section select করা
      const section = document.getElementById(targetId);

      if (section) {

        // Header এর জন্য extra offset
        const offset = 80;

        // Final scroll position calculate
        const topPos =
          section.getBoundingClientRect().top +
          window.scrollY -
          offset;

        // Smooth scroll
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });

        // সব nav link থেকে active remove
        document.querySelectorAll('.nav-links a')
          .forEach(a => a.classList.remove('active'));

        // Current clicked link active করা
        el.classList.add('active');
      }
    }


    // ==============================
    // Counter Animation
    // Hero section number animation
    // ==============================
    function animateCounter(el) {

      // Final target number
      const target = parseInt(el.getAttribute('data-target'));

      // Increment value
      const increment = target / 80;

      let current = 0;

      // Counter timer
      const timer = setInterval(() => {

        current += increment;

        // যদি target complete হয়
        if (current >= target) {

          // Final value show
          el.textContent = target.toLocaleString();

          // Timer stop
          clearInterval(timer);

        } else {

          // Running number show
          el.textContent =
            Math.floor(current).toLocaleString();

        }

      }, 25);
    }


    // ==============================
    // Copy Phone Number
    // Clipboard এ number copy করা
    // ==============================
    window.copyPhone = (phone) => {

      navigator.clipboard.writeText(phone)

        .then(() => {

          // Success message
          alert("✅ Phone number copied!");

        })

        .catch(() => {

          // Error message
          alert("❌ Copy failed!");

        });
    };


    // ==============================
    // Call Donor Function
    // Donor কে direct call করার function
    // ==============================
    window.callDonor = (phone, name) => {

      // Confirmation alert
      if (confirm(`Call ${name} now?`)) {

        // Mobile call trigger
        window.location.href = `tel:${phone}`;

      }
    };


    // ==============================
    // Floating Blood Animation
    // Background blood drop effect
    // ==============================
    function createFloatingDrops() {

      // Background container select
      const bg = document.getElementById('bloodBg');

      // পুরানো drop remove করা
      bg.innerHTML = '';

      // Mobile এ কম drop show হবে
      const totalDrops =
        window.innerWidth < 768 ? 8 : 20;

      // Loop দিয়ে drop generate
      for (let i = 0; i < totalDrops; i++) {

        // New div create
        const drop = document.createElement('div');

        drop.className = 'drop';

        // Blood emoji
        drop.textContent = '🩸';

        // Random horizontal position
        drop.style.left = Math.random() * 100 + '%';

        // Random animation duration
        drop.style.animationDuration =
          (Math.random() * 12 + 16) + 's';

        // Random animation delay
        drop.style.animationDelay =
          '-' + Math.random() * 20 + 's';

        // Append into background
        bg.appendChild(drop);
      }
    }


    // ==============================
    // Theme Toggle System
    // Light / Dark mode switch
    // ==============================

    // Theme button select
    const toggleBtn =
      document.getElementById('themeToggle');

    // Body select
    const body = document.body;

    // LocalStorage থেকে saved theme load
    const savedTheme =
      localStorage.getItem('theme');

    // যদি আগে saved theme থাকে
    if (savedTheme) {

      // Theme apply করা
      body.setAttribute('data-theme', savedTheme);

      // Icon update
      if (savedTheme === 'dark') {

        toggleBtn.innerHTML =
          '<i class="fas fa-sun"></i>';

      } else {

        toggleBtn.innerHTML =
          '<i class="fas fa-moon"></i>';

      }
    }

    // Theme toggle click event
    toggleBtn.addEventListener('click', () => {

      // যদি dark mode থাকে
      if (body.getAttribute('data-theme') === 'dark') {

        // Light mode apply
        body.setAttribute('data-theme', 'light');

        // Save theme
        localStorage.setItem('theme', 'light');

        // Change icon
        toggleBtn.innerHTML =
          '<i class="fas fa-moon"></i>';

      } else {

        // Dark mode apply
        body.setAttribute('data-theme', 'dark');

        // Save theme
        localStorage.setItem('theme', 'dark');

        // Change icon
        toggleBtn.innerHTML =
          '<i class="fas fa-sun"></i>';

      }

    });


    // ==============================
    // Window Load Event
    // Page fully load হওয়ার পর run হবে
    // ==============================
    window.onload = function() {

      // Initial donor render
      renderInitial();

      // Counter animation start
      document.querySelectorAll('.stat-number')
        .forEach(el => animateCounter(el));

      // Blood background effect start
      createFloatingDrops();

      // ==============================
      // Hero Section Animation
      // ==============================
      setTimeout(() => {

        document.querySelector('.hero').style.opacity = '1';

        document.querySelector('.hero').style.transform =
          'translateY(0)';

      }, 200);


      // ==============================
      // Scroll Animation Observer
      // About / Contact / Developer section
      // ==============================
      const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

          // Section viewport এ আসলে visible হবে
          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

          }

        });

      }, {
        threshold: 0.15
      });

      // সব animated section observe করা
      document.querySelectorAll('.section-animate')
        .forEach(section => {

          observer.observe(section);

        });
    };