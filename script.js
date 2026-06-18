    // ==============================
    // Floating Blood Animation
    // Background blood drop effect
    // ==============================
    function createFloatingDrops() {

      // Background container select
      const bg = document.getElementById('bloodBg');

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
    // Donor Database
    // সব donor information এখানে store করা হয়েছে
    // ==============================
    const donors = [

																			{ name: "Md Harun", blood: "A+", photo: "https://i.ibb.co.com/LdwrPRTx/harun-hpc.jpg", profession: "Director of HPC", location: "Savar, Dhaka", age: 24, phone: "+8801889-783375", messenger: "md.harun.293247", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Akram Hossain", blood: "AB+", photo: "https://i.postimg.cc/ryZjpQ8D/akramh.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 24, phone: "+8801402030317", messenger: "mdakramhossain.romjan", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Suhag Mia", blood: "O-", photo: "https://i.postimg.cc/76kH03wM/suhag.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 28, phone: "+8801629819804", messenger: "s.d.suhag.khan.2025", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Iqbal Baher Robin", blood: "AB+", photo: "https://i.ibb.co.com/xttPgq9d/ibrobin.jpg", profession: "Entrepreneur", location: "Mawna, Sreepur, Gazipur", age: 40, phone: "+8801711-223344", messenger:"", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Md Badal Mia", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 39, phone: "+881714883786", messenger:"", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Al Amin", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Mawna, sreepur, gazipur", age: 28, phone: "+8801950172522", messenger:"", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Jahidur Rahman", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 30, phone: "+88791664878", messenger:"Jr.khokon", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rone Mia Shihab", blood: "B+", photo: "https://i.ibb.co.com/23yZzqy7/shihabr.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 28, phone: "+8801710-509022", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Towhid Rahman", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Freelancer, Web Developer", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801477820404", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Ibadul Chowdhury", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "General Secretary at LLF", location: "Sofipur, Gazipur", age: "", phone: "+8801889887455", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Lablu Islam", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Job Holder", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801990622909", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Farzana Tithi", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Student", location: "BKSP, Savar, Dhaka", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Md Manik Hossain", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Organizing Secretary at LLF", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801767574979", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Monir Hossain", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Organizing Secretary at LLF", location: "BKSP, Savar, Dhaka", age: "", phone: "+8801921628800", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Jannatul Ferdousi Boby", blood: "O+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Student", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Rabiul Islam Robi", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801615260635", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Afnan Ahmed Bijoy", blood: "B+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Savar, Dhaka", age: "", phone: "+8801728562229", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Mehedi Bepari", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Ass. Organizing Secretary at LLF", location: "BKSP, Savar, Dhaka", age: "", phone: "+8801843364556", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Anowar Hossain", blood: "B+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801942104949", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Antora Akter", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Student", location: "BKSP, Savar, Dhaka", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Md Jahid Hossain", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Assistant Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801883909629", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rahima Akter", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Ass. Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

																			{ name: "Md Raju Ahmed", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801745268355", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Yasin", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801830001685", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Rakib Hossain", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur-10", age: "", phone: "+8801783972901", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Tarun", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Badda Link Road, Dhaka", age: "", phone: "+8801839829521", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Safim Sarkar Shohag", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Kuril Biswa Road", age: "", phone: "+8801301355156", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dipu", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Banasree", age: "", phone: "+8801858073862", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Farhan", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Tangail", age: "", phone: "+8801824655328", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdul Malek Rustom", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gazipur Sadar", age: "", phone: "+8801779107423", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Sahabur Sikder", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhamrai, Dhaka", age: "", phone: "+8801953937393", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Abdulla Al Monzil", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Tetulia, Panchagarh", age: "", phone: "+8801628010756", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Mohor Ali", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhamrai, Dhaka City", age: "", phone: "+8801772519307", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Nazmul Islam", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhamrai, Dhaka", age: "", phone: "+8801741428764", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Mosharof Hossin", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Keraniganj, Dhaka", age: "", phone: "+8801739183843", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Apurbo", blood: "B+", photo: "https://i.ibb.co.com/MxtrQGDj/Apurbo-Dhaka.jpg", profession: "", location: "Dhaka, Bangladesh", age: 28, phone: "+8801864446641", messenger: "md.opurbo.7543", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md Arif", blood: "A+", photo: "https://i.ibb.co.com/HLkPmNv2/md-arif-dhaka-1204.jpg", profession: "Pathao Drive", location: "38/AKB Road, Dhaka 1204", age: 40, phone: "+8801760824505", messenger: "arif.akashtech", verified: true, protectedNumber: false, blurredPhoto: false },

																			{ name: "Emon Chowdhury", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801747425419", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Nayim", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Shaheenbag", age: "", phone: "+8801766110039", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Ratul", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Nirjhor", age: "", phone: "+8801940900137", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Jashim", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801917842261", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Contact to Verify", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Rampura / Gazipur", age: "", phone: "+8801813936561", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Contact to Verify", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka / Lakshmipur", age: "", phone: "+8801830123617", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Kawsar Mahmud", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801926264906", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Bappi", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801710347502", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Mutafizur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Banasree", age: "", phone: "+8801722970383", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Shahidul Islam", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801918109098", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Wahidul Haque", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gazipur", age: "", phone: "+8801716611075", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Mahmudur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801717014761", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Rifat Hossain", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801685332733", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Shameem Anwar Saadat", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801711541201", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Tarun Islam", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801911212966", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Iqbaal", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801552373506", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Ashraful", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801711563356", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Tazul Islam", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801915969809", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Tanveer", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801620759827", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Jishaad Rana", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801687767102", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Prosenjeet", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Khulna", age: "", phone: "+8801925323616", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Sameer Sarkar", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801676798898", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Ashraful Islam", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801911088640", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Soheel Sonet", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801860363686", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Rasel Qureshi", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801711484380", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Towhed Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mogbazar", age: "", phone: "+8801920910091", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Riyad", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Lalbag", age: "", phone: "+8801988843774", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Alif Reza", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Pabna", age: "", phone: "+8801744259918", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Arman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Chittagong", age: "", phone: "+8801839109445", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Azad Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Habiganj", age: "", phone: "+8801771098615", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Fazlur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Chittagong", age: "", phone: "+8801711194285", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Imtiaz Lijon", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Khulna", age: "", phone: "+8801750024678", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Kutub Uddin Chishti", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Brahmanbaria", age: "", phone: "+8801921985060", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Rakib Hossain", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Lakshmipur", age: "", phone: "+8801756845968", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Shahid", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Sylhet", age: "", phone: "+8801712357119", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Masum Billah", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gaibandha", age: "", phone: "+8801737066845", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Golam Towhid", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Rajshahi", age: "", phone: "+8801736473685", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Zaima Jahan Srabony", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801776227360", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Jahid", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801713521174", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Zakir", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801721010509", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Sarwar Jahan Prince", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Uttara", age: "", phone: "+8801819855040", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Tanassum Tanzil Suchi", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "", location: "Uttara", age: "", phone: "+8801614000774", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Mohammad Rahul", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Kallyanpur", age: "", phone: "+8801671766329", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Alvi Ahmed", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "", age: "", phone: "+8801771326202", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Muhammad Rakibul Islam", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "", age: "", phone: "+8801789600010", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Jannatul Naima", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "", location: "", age: "", phone: "+8801754759918", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Md Rafiad Islam", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "", age: "", phone: "+8801684810001", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },
																			{ name: "Masaba", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "", location: "", age: "", phone: "+8801922299755", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{name:"Emon Chowdhury",bloodGroup:"A-",location:"Dhanmondi",phone:"01747425419",whatsapp:"https://wa.me/8801747425419",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Safayet Ullah",bloodGroup:"A-",location:"Dhanmondi",phone:"01680909520",whatsapp:"https://wa.me/8801680909520",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Abdus Samad Azad",bloodGroup:"A-",location:"Farmgate",phone:"01758286147",whatsapp:"https://wa.me/8801758286147",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Consoler Jack Denver",bloodGroup:"A-",location:"Gulshan",phone:"01865600400",whatsapp:"https://wa.me/8801865600400",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rabbi",bloodGroup:"A-",location:"Gulshan",phone:"01536198012",whatsapp:"https://wa.me/8801536198012",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Parvez Hossain",bloodGroup:"A-",location:"Jurain",phone:"01678709199",whatsapp:"https://wa.me/8801678709199",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Shafiur Rahman",bloodGroup:"A-",location:"Kallyanpur",phone:"01768843878",whatsapp:"https://wa.me/8801768843878",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Avishek Bhowmik",bloodGroup:"A-",location:"Mirpur",phone:"01682328191",whatsapp:"https://wa.me/8801682328191",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Sabit Hasan",bloodGroup:"A-",location:"Mirpur",phone:"01842759613",whatsapp:"https://wa.me/8801842759613",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"M Ahmed Mahey",bloodGroup:"A-",location:"Mohakhali",phone:"01553432984",whatsapp:"https://wa.me/8801553432984",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Zubayer Hossain Fahim",bloodGroup:"A-",location:"New Market",phone:"01842861288",whatsapp:"https://wa.me/8801842861288",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Reza",bloodGroup:"A-",location:"Savar",phone:"01721527394",whatsapp:"https://wa.me/8801721527394",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Mamun",bloodGroup:"A-",location:"Shyamoli",phone:"01737877743",whatsapp:"https://wa.me/8801737877743",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rafiqul Islam Rony",bloodGroup:"A-",location:"Uttara",phone:"01825194679",whatsapp:"https://wa.me/8801825194679",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"A-",location:"Uttara",phone:"01939954100",whatsapp:"https://wa.me/8801939954100",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Raz Roy",bloodGroup:"A-",location:"Ullapara",phone:"01767351739",whatsapp:"https://wa.me/8801767351739",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},

																			{name:"FM Khalid Bin Ibrahim",bloodGroup:"AB-",location:"Banasree",phone:"01730701915",whatsapp:"https://wa.me/8801730701915",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Mostafizur Rahman",bloodGroup:"AB-",location:"Banasree",phone:"01733135716",whatsapp:"https://wa.me/8801733135716",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Faisal Khan",bloodGroup:"AB-",location:"Lalbag",phone:"01961122333",whatsapp:"https://wa.me/8801961122333",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Ridwanur Rahman",bloodGroup:"AB-",location:"Mirpur",phone:"01711084006",whatsapp:"https://wa.me/8801711084006",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Shamim Ahammed",bloodGroup:"AB-",location:"Mirpur",phone:"01927790773",whatsapp:"https://wa.me/8801927790773",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Suvasish Dey",bloodGroup:"AB-",location:"Savar",phone:"01711288432",whatsapp:"https://wa.me/8801711288432",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rasel Sarker",bloodGroup:"AB-",location:"Shegunbagicha",phone:"01906601111",whatsapp:"https://wa.me/8801906601111",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Abdur Rahim",bloodGroup:"AB-",location:"Sobujbag",phone:"01961500757",whatsapp:"https://wa.me/8801961500757",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rony Rahman",bloodGroup:"AB-",location:"Uttara",phone:"01744244047",whatsapp:"https://wa.me/8801744244047",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},

																			{name:"Saikat Hossain",bloodGroup:"B-",location:"Ashulia",phone:"01722417557",whatsapp:"https://wa.me/8801722417557",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Suman Ahmed",bloodGroup:"B-",location:"Bangshal",phone:"01949303803",whatsapp:"https://wa.me/8801949303803",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"B-",location:"Cantonment",phone:"01997617633",whatsapp:"https://wa.me/8801997617633",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Abu Rayhan Ifat",bloodGroup:"B-",location:"Dhanmondi",phone:"01633717791",whatsapp:"https://wa.me/8801633717791",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"B-",location:"Dhanmondi",phone:"01868981543",whatsapp:"https://wa.me/8801868981543",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Ismail Khalil Ullah",bloodGroup:"B-",location:"Farmgate",phone:"01710335252",whatsapp:"https://wa.me/8801710335252",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Hosen Miah",bloodGroup:"B-",location:"Gulshan",phone:"01914709682",whatsapp:"https://wa.me/8801914709682",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"B-",location:"Jatrabari",phone:"01777788299",whatsapp:"https://wa.me/8801777788299",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Hamidur Rahman Mehedi",bloodGroup:"B-",location:"Mirpur",phone:"01618778811",whatsapp:"https://wa.me/8801618778811",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Sumon Hussain Munna",bloodGroup:"B-",location:"Mirpur",phone:"01799922200",whatsapp:"https://wa.me/8801799922200",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rony Ahmed",bloodGroup:"B-",location:"Mirpur",phone:"01728952159",whatsapp:"https://wa.me/8801728952159",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Tasin Sami",bloodGroup:"B-",location:"Mirpur",phone:"01731843866",whatsapp:"https://wa.me/8801731843866",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Naeem",bloodGroup:"B-",location:"Mohammadpur",phone:"01731612561",whatsapp:"https://wa.me/8801731612561",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Mehedi",bloodGroup:"B-",location:"Mohammadpur",phone:"01837373202",whatsapp:"https://wa.me/8801837373202",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Tajul Islam",bloodGroup:"B-",location:"Niketon",phone:"01708109675",whatsapp:"https://wa.me/8801708109675",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Ripon",bloodGroup:"B-",location:"Nikunja",phone:"01962424049",whatsapp:"https://wa.me/8801962424049",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Anishur Rahman Sohel",bloodGroup:"B-",location:"Rayerbag",phone:"01726363026",whatsapp:"https://wa.me/8801726363026",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"SA Zabir",bloodGroup:"B-",location:"Savar",phone:"01738057519",whatsapp:"https://wa.me/8801738057519",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"B-",location:"Shyamoli",phone:"01684404780",whatsapp:"https://wa.me/8801684404780",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Joy",bloodGroup:"B-",location:"Shyamoli",phone:"01754004404",whatsapp:"https://wa.me/8801754004404",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"B-",location:"Tejgaon",phone:"01761698844",whatsapp:"https://wa.me/8801761698844",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Sumon Sikder",bloodGroup:"B-",location:"Uttara",phone:"01748632920",whatsapp:"https://wa.me/8801748632920",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},

																			{name:"Mr. Ashik",bloodGroup:"O-",location:"Zirabo",phone:"01710027589",whatsapp:"https://wa.me/8801710027589",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Hridoy Islam Hridu",bloodGroup:"O-",location:"Badda",phone:"01683626187",whatsapp:"https://wa.me/8801683626187",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"O-",location:"Bashabo",phone:"01521402247",whatsapp:"https://wa.me/8801521402247",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Mahfuj Ullah",bloodGroup:"O-",location:"Bashabo",phone:"01772013388",whatsapp:"https://wa.me/8801772013388",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Didarul Islam",bloodGroup:"O-",location:"Cantonment",phone:"01678035238",whatsapp:"https://wa.me/8801678035238",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Nasir",bloodGroup:"O-",location:"Cantonment",phone:"01736616565",whatsapp:"https://wa.me/8801736616565",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Hossain Rony",bloodGroup:"O-",location:"Dania",phone:"01625681553",whatsapp:"https://wa.me/8801625681553",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Kamrul Hasan",bloodGroup:"O-",location:"Dhanmondi",phone:"01814714948",whatsapp:"https://wa.me/8801814714948",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Tarikul Raju",bloodGroup:"O-",location:"Dilkusha",phone:"01713178388",whatsapp:"https://wa.me/8801713178388",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Javed Nasim",bloodGroup:"O-",location:"Hazaribag",phone:"01994736230",whatsapp:"https://wa.me/8801994736230",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Yasir Sohel",bloodGroup:"O-",location:"Kallyanpur",phone:"01837569065",whatsapp:"https://wa.me/8801837569065",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rakib Hasan",bloodGroup:"O-",location:"Kamalapur",phone:"01610086444",whatsapp:"https://wa.me/8801610086444",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"HM Saife",bloodGroup:"O-",location:"Kamarpara",phone:"01989456743",whatsapp:"https://wa.me/8801989456743",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Shojib",bloodGroup:"O-",location:"Lalbag",phone:"01923502360",whatsapp:"https://wa.me/8801923502360",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Contact to Verify",bloodGroup:"O-",location:"Mirpur",phone:"01736913763",whatsapp:"https://wa.me/8801736913763",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Nirob Islam Rumon",bloodGroup:"O-",location:"Mirpur",phone:"01752131940",whatsapp:"https://wa.me/8801752131940",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Tonay",bloodGroup:"O-",location:"Mirpur",phone:"01925576933",whatsapp:"https://wa.me/8801925576933",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Mahedi Hasan Dolon",bloodGroup:"O-",location:"Mogbazar",phone:"01675550732",whatsapp:"https://wa.me/8801675550732",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Riyad",bloodGroup:"O-",location:"Mohammadpur",phone:"01915550370",whatsapp:"https://wa.me/8801915550370",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Abu Mohammed Sourov",bloodGroup:"O-",location:"Panthapath",phone:"01722683705",whatsapp:"https://wa.me/8801722683705",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Ashik Rahman",bloodGroup:"O-",location:"Postogola",phone:"01921664114",whatsapp:"https://wa.me/8801921664114",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Emtiaz Rahman",bloodGroup:"O-",location:"Savar",phone:"01764935821",whatsapp:"https://wa.me/8801764935821",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rahat Khan Dipto",bloodGroup:"O-",location:"Savar",phone:"01917000880",whatsapp:"https://wa.me/8801917000880",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rajib",bloodGroup:"O-",location:"Savar",phone:"01774061678",whatsapp:"https://wa.me/8801774061678",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rajib",bloodGroup:"O-",location:"Savar",phone:"01791785279",whatsapp:"https://wa.me/8801791785279",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Nahid Rexve",bloodGroup:"O-",location:"Shahbag",phone:"01739376172",whatsapp:"https://wa.me/8801739376172",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Alif",bloodGroup:"O-",location:"Uttara",phone:"01739576708",whatsapp:"https://wa.me/8801739576708",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Fahim Khan Iqbal",bloodGroup:"O-",location:"Uttara",phone:"01819664053",whatsapp:"https://wa.me/8801819664053",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"FS Khan",bloodGroup:"O-",location:"Uttara",phone:"01714664368",whatsapp:"https://wa.me/8801714664368",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Anik",bloodGroup:"O-",location:"Uttara",phone:"01771240671",whatsapp:"https://wa.me/8801771240671",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Jahangir Alam",bloodGroup:"O-",location:"Uttara",phone:"01710530142",whatsapp:"https://wa.me/8801710530142",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Md. Shohanur Rahman",bloodGroup:"O-",location:"Uttara",phone:"01711512047",whatsapp:"https://wa.me/8801711512047",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Rayhan Hossain",bloodGroup:"O-",location:"Uttara",phone:"01737029698",whatsapp:"https://wa.me/8801737029698",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},
																			{name:"Shakil",bloodGroup:"O-",location:"Uttara",phone:"01760050000",whatsapp:"https://wa.me/8801760050000",photo:"https://i.ibb.co.com/wjy8hHn/male.jpg",photoProtection:false,photoBlur:false,messenger:""},

																			{ name: "Md. Safayet Ullah", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801680909520", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdus Samad Azad", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Farmgate", age: "", phone: "+8801758286147", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rabbi", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan", age: "", phone: "+8801536198012", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Parvez Hossain", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Jurain", age: "", phone: "+8801678709199", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Shafiur Rahman", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Kallyanpur", age: "", phone: "+8801768843878", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Anwarul Kabir", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801997903715", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Avishek Bhowmik", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801682328191", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Nuruddin", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801671429402", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Nur Uddin", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801671429402", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Sabit Hasan", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801842759613", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "M Ahmed Mahey", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohakhali", age: "", phone: "+8801553432984", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Zubayer Hossain Fahim", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "New Market", age: "", phone: "+8801842861288", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Reza", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Savar", age: "", phone: "+8801721527394", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Anwarul Kabir", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Shyamoli", age: "", phone: "+8801552653421", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Mamun", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Shyamoli", age: "", phone: "+8801737877743", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rafiqul Islam Rony", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Uttara", age: "", phone: "+8801825194679", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "FM Khalid Bin Ibrahim", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Banasree", age: "", phone: "+8801730701915", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Mostafizur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Banasree", age: "", phone: "+8801733135716", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Faisal Khan", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Lalbag", age: "", phone: "+8801961122333", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Hafej Mawlana Al Amin", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801913909168", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Ridwanur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801711084006", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Shamim Ahammed", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801927790773", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Azizul Islam", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mogbazar", age: "", phone: "+8801676317357", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Hafijur Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohammadpur", age: "", phone: "+8801670411137", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rasel Sarker", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Shegunbagicha", age: "", phone: "+8801906601111", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdur Rahim", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Sobujbag", age: "", phone: "+8801961500757", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rony Rahman", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Uttara", age: "", phone: "+8801744244047", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Saikat Hossain", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Ashulia", age: "", phone: "+8801722417557", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Suman Ahmed", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Bangshal", age: "", phone: "+8801949303803", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abu Rayhan Ifat", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801633717791", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Ismail Khalil Ullah", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Farmgate", age: "", phone: "+8801710335252", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Hosen Miah", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan", age: "", phone: "+8801914709682", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Hamidur Rahman Mehedi", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801618778811", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Sumon Hussain Munna", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801799922200", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rony Ahmed", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801728952159", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Tasin Sami", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801731843866", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Tofayel Ahmed", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur", age: "", phone: "+8801920799928", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Naeem", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohammadpur", age: "", phone: "+8801731612561", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Omar Faruk", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohammadpur", age: "", phone: "+8801717616483", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Mehedi", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohammadpur", age: "", phone: "+8801837373202", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Sagar", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mohammadpur", age: "", phone: "+8801961501410", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Tajul Islam", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Niketon", age: "", phone: "+8801708109675", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Ripon", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Nikunja", age: "", phone: "+8801962424049", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Quazi Mahi Uddin", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Ramna", age: "", phone: "+8801929020403", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Anishur Rahman Sohel", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Rayerbag", age: "", phone: "+8801726363026", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "SA Zabir", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Savar", age: "", phone: "+8801738057519", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "MD RAKIB Hossain", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Mirpur-10", age: "", phone: "+8801783972901", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dipu", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Bonosree", age: "", phone: "+8801858073862", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Sourav", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801753961657", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Niloy", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801822116436", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Faysal", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801830361562", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdul Awal Shakib", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan, Dhaka", age: "", phone: "+8801844464155", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Al Mamun Bidyut", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Manikganj Sadar", age: "", phone: "+8801953205039", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "MD. SHAHADAT DEWAN", blood: "A-", photo: "https://i.ibb.co.com/B2j2QByq/shhadat-kaliakoir.jpg", profession: "", location: "Kaliakior, Gazipur", age: "", phone: "+8801734571212", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Emon Chowdhury", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801747425419", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Md. Safayet Ullah", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801680909520", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdus Samad Azad", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Farmgate", age: "", phone: "+8801758286147", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Consoler Jack Denver", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan", age: "", phone: "+8801865600400", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Rabbi", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan", age: "", phone: "+8801536198012", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dr. Azmi", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "CTG", age: "", phone: "+8801676637421", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Alvi", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "CTG", age: "", phone: "+8801830104814", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Tony", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Mohammadpur", age: "", phone: "+8801789507333", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Dhruba", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Moghbazar", age: "", phone: "+8801751392156", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Jemi", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Sylhet", age: "", phone: "+8801823326498", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Zubayer", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Mirpur", age: "", phone: "+8801815584555", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Anwara", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "", age: "", phone: "+8801706568370", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Nusrat", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Mirpur", age: "", phone: "+8801778108903", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Meem", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Shahjahanpur", age: "", phone: "+8801733398109", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Tanjim / Rafiatul Jannat Tanjim", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Mirpur", age: "", phone: "+8801603901008", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Teena", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Dinajpur", age: "", phone: "+8801790124855", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr Mahir", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Dhanmondi", age: "", phone: "+8801615113361", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Saidur Rahman", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Dhaka", age: "", phone: "+8801795201691", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Rifat Zahan", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Mohammadpur", age: "", phone: "+8801780951906", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Fatema Khatun", blood: "A-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Rajshahi", age: "", phone: "+8801611998331", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Safim Sarkar Shohag", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Kuril Biswa road", age: "", phone: "+8801301355156", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Shishir", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801845807021", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Mojammal", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801818028020", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dr. Raisa", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Dhaka", age: "", phone: "+8801755786334", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Sushmita", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Dhaka", age: "", phone: "+8801680653369", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Nafisa", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "", age: "", phone: "+8801747722037", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Shefayet", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "CTG", age: "", phone: "+8801824300332", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Meher", blood: "B-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Dhanmondi", age: "", phone: "+8801645801580", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Saiful", blood: "B-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Kishorgonj", age: "", phone: "+8801926084696", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Farhan", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Tangail", age: "", phone: "+8801824655328", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Abdullah Al Mamun", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801581173886", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dr. Lethe", blood: "AB-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Sylhet", age: "", phone: "+8801723094510", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Sorif", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Barisal", age: "", phone: "+8801725306074", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Fahim", blood: "AB-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Malibagh", age: "", phone: "+8801754877766", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Munny", blood: "AB-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Brahmanbaria", age: "", phone: "+8801791111842", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Sadia", blood: "AB-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Rajshahi Sadar", age: "", phone: "+8801521482939", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Tarun", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "বাড্ডা, লিংক রোড, ঢাকা", age: "", phone: "+8801839829521", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Showrav", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801816441130", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Nabab", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801682506914", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Asif", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhaka", age: "", phone: "+8801861257845", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

																			{ name: "Dr. Rozina", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Mohakhali", age: "", phone: "+8801712028599", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Limon", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Jamalpur", age: "", phone: "+8801790225051", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Shariful", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "", age: "", phone: "+8801722538818", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Sadia", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Uttora", age: "", phone: "+8801711702459", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Dwip / Samiul", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Mirpur-2", age: "", phone: "+8801842082883", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Lima", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Kuril Bissho road", age: "", phone: "+8801759556606", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Iqbal", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "CTG", age: "", phone: "+8801979703307", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Tasnim", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Mymensing", age: "", phone: "+8801917454638", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Rabin", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Savar", age: "", phone: "+8801571722258", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Zaki", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Dhaka", age: "", phone: "+8801817149346", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Mahbub", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Rayerbagh", age: "", phone: "+8801759800507", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Jahid", blood: "O-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Doctor", location: "Barishal", age: "", phone: "+8801537301718", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false },

																			{ name: "Dr. Zerin", blood: "O-", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Doctor", location: "Barishal", age: "", phone: "+8801780179990", messenger: "", verified: false, protectedNumber: true, blurredPhoto: false }
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
function showProtectedAlert() {
  alert("This donor has protected their phone number.\nPlease use the Messenger link.");
}

// ==============================
// Create Donor Card Function
// Dynamic donor card generate করার function
// ==============================
function createCard(d) {
  
  const protectNumber = d.protectedNumber === true;
  const blurPhoto = d.blurredPhoto === true;

  return `
    <div class="card">

      ${d.verified ? `
        <div class="verified">
          <i class="fas fa-check-circle"></i> Verified
        </div>` : ''}

<!-- Photo Container -->
<div class="photo-container">
  <img
    src="${d.photo}"
    class="photo ${blurPhoto ? 'blurred-photo' : ''}"
    alt="${d.name}"
    loading="lazy"
  >
  <div class="blood-badge">${d.blood}</div>

  <!-- Photo Blur Tooltip -->
  ${blurPhoto ? `
    <div class="custom-tooltip photo-tooltip" 
         data-tooltip="This donor has protected their profile picture for privacy.">
    </div>` : ''}
</div>

      <h3 class="name">${d.name}</h3>
      <p class="profession">${d.profession}</p>

      <div class="info-row">
        <i class="fas fa-map-marker-alt"></i> ${d.location}
      </div>

      <div class="info-row">
        <i class="fas fa-user"></i> ${d.age} Years Old
      </div>

      <!-- Phone Number -->
      <div class="info-row">
        <i class="fas fa-phone"></i>
        ${protectNumber ? `
          <span class="secured-number" 
                data-tooltip="This donor has protected their phone number. Please use the Messenger link.">
            <i class="fas fa-lock"></i> Number Secured
          </span>` 
          : d.phone}
      </div>

      <div class="status">
        <i class="fas fa-circle"></i> Available For Emergency
      </div>

      <div class="actions">

        <button class="call-btn" 
          onclick="${protectNumber ? "showProtectedAlert()" : `callDonor('${d.phone}', '${d.name}')`}">
          <i class="fas fa-phone"></i> Call
        </button>

        <button class="social-btn" 
          onclick="${protectNumber ? "showProtectedAlert()" : `copyPhone('${d.phone}')`}">
          <i class="fas fa-copy"></i>
        </button>

        ${protectNumber ? `
          <button class="social-btn" style="opacity:0.5; cursor:not-allowed;" disabled title="WhatsApp Protected">
            <i class="fab fa-whatsapp"></i>
          </button>` : `
          <a href="https://wa.me/${d.phone.replace('+880', '880')}" 
             target="_blank" class="social-btn" title="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>`}

        <a href="https://m.me/${d.messenger || ''}" 
           target="_blank" class="social-btn" title="Chat on Messenger">
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





// =========================================
// FAQ Accordion System
// Professional Auto Close Accordion
//
// একসাথে শুধু ১টি FAQ open থাকবে
// নতুন FAQ open করলে আগেরটি বন্ধ হবে
// =========================================

document
.querySelectorAll('.faq-question')
.forEach(button => {

  button.addEventListener('click', () => {

    // Current clicked FAQ item
    const currentItem =
      button.parentElement;

    // Close all other FAQ items
    document
    .querySelectorAll('.faq-item')
    .forEach(item => {

      if(item !== currentItem){

        item.classList.remove('active');

      }

    });

    // Toggle current FAQ
    currentItem.classList.toggle('active');

  });

});




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




	// ==========================================
	// Mobile Navigation System
	// Mobile menu open / close control
	// ==========================================

	// Menu toggle button select করা
	const menuToggle =
	document.getElementById('menuToggle');

	// Mobile menu container select করা
	const mobileMenu =
	document.getElementById('mobileMenu');

	// Close button select করা
	const closeMenu =
	document.getElementById('closeMenu');

	// Background overlay select করা
	const menuOverlay =
	document.getElementById('menuOverlay');


	// ==========================================
	// Open Mobile Menu Function
	// Mobile menu এবং overlay show করবে
	// ==========================================
	function openMobileMenu() {

	  // Menu show করা
	  mobileMenu.classList.add('active');

	  // Overlay show করা
	  menuOverlay.classList.add('active');

	  // Body scroll disable
	  document.body.style.overflow = 'hidden';

	}


	// ==========================================
	// Close Mobile Menu Function
	// Mobile menu এবং overlay hide করবে
	// ==========================================
	function closeMobileMenu() {

	  // Menu hide করা
	  mobileMenu.classList.remove('active');

	  // Overlay hide করা
	  menuOverlay.classList.remove('active');

	  // Body scroll enable
	  document.body.style.overflow = '';

	}


	// ==========================================
	// Hamburger Menu Click Event
	// Hamburger icon click করলে menu open হবে
	// ==========================================
	menuToggle.addEventListener('click', openMobileMenu);


	// ==========================================
	// Close Button Event
	// X icon click করলে menu close হবে
	// ==========================================
	closeMenu.addEventListener('click', closeMobileMenu);


	// ==========================================
	// Overlay Click Event
	// Overlay click করলে menu close হবে
	// ==========================================
	menuOverlay.addEventListener('click', closeMobileMenu);


	// ==========================================
	// Mobile Menu Link Events
	// যেকোনো menu link click করলে menu close হবে
	// ==========================================
	document
	.querySelectorAll('.mobile-menu a')
	.forEach(link => {

	  link.addEventListener('click', () => {

		closeMobileMenu();

	  });

	});


	// ==========================================
	// ESC Key Support
	// ESC press করলে menu close হবে
	// ==========================================
	document.addEventListener('keydown', (e) => {

	  if (
		e.key === 'Escape' &&
		mobileMenu.classList.contains('active')
	  ) {

		closeMobileMenu();

	  }

	});



	// ABOUT STATS ANIMATION - Scroll e trigger hobe
	function animateAboutStats() {
	  const counters = document.querySelectorAll('#about-stats .count');
	  
	  counters.forEach(counter => {
		const target = parseInt(counter.getAttribute('data-target'));
		let count = 0;
		const increment = Math.ceil(target / 70);
		
		const updateCounter = () => {
		  count += increment;
		  if (count < target) {
			counter.textContent = count.toLocaleString() + '+';
			setTimeout(updateCounter, 25);
		  } else {
			counter.textContent = target.toLocaleString() + '+';
		  }
		};
		
		updateCounter();
	  });
	}

	// Scroll kore About section e gele animate hobe
	function triggerAboutStatsOnScroll() {
	  const aboutStats = document.getElementById('about-stats');
	  if (!aboutStats) return;

	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			animateAboutStats();
			observer.disconnect(); // ekbar e animate hobe
		  }
		});
	  }, { threshold: 0.4 });

	  observer.observe(aboutStats);
	}

	window.addEventListener('load', triggerAboutStatsOnScroll);
	
	


	// =====================================================
	// DEVELOPER SECTION
	// Accordion Toggle + Dynamic Typing Animation
	//
	// Purpose:
	// - Show/Hide developer portfolio information
	// - Create modern typing effect for developer roles
	// =====================================================



	// =====================================================
	// Developer card header-এ click করলে
	// developer information expand/collapse হবে।
	// =====================================================

	document.addEventListener('DOMContentLoaded', () => {

	  const header = document.getElementById('devHeader');
	  const content = document.getElementById('devContent');
	  const toggleBtn = document.getElementById('devToggleBtn');

	  if (header && content && toggleBtn) {

		header.addEventListener('click', () => {

		  content.classList.toggle('show');

		  toggleBtn.style.transform =
			content.classList.contains('show')
			  ? 'rotate(180deg)'
			  : 'rotate(0deg)';

		});

	  }

	});



	// =====================================================
	// Developer Typing Animation
	// Developer-এর বিভিন্ন role ও skill
	// typing effect-এর মাধ্যমে একের পর এক দেখানো হবে।
	// =====================================================

	const typingTexts = [

	  "Full Stack Developer",
	  "Problem Solver",
	  "UI/UX Enthusiast",
	  "Open Source Contributor"

	];

	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;



	function typeEffect() {

	  const typingEl =
		document.getElementById('typingText');

	  if (!typingEl) return;

	  const current = typingTexts[textIndex];

	  if (isDeleting) {

		charIndex--;

		typingEl.textContent =
		  current.substring(0, charIndex);

	  } else {

		charIndex++;

		typingEl.textContent =
		  current.substring(0, charIndex);

	  }

	  let speed = isDeleting ? 50 : 80;

	  // Pause when full text is completed
	  if (
		!isDeleting &&
		charIndex === current.length
	  ) {

		speed = 1500;
		isDeleting = true;

	  }

	  // Move to next title
	  else if (
		isDeleting &&
		charIndex === 0
	  ) {

		isDeleting = false;

		textIndex =
		  (textIndex + 1) % typingTexts.length;

	  }

	  setTimeout(typeEffect, speed);

	}



	// =====================================================
	// Initialize Developer Typing Effect
	// Page সম্পূর্ণ load হওয়ার পর
	// typing animation শুরু হবে।
	// =====================================================

	window.addEventListener('load', () => {

	  setTimeout(typeEffect, 800);

	});





	// =====================================================
	// FOOTER DEVELOPER SIGNATURE
	// Footer Typing Text Collection
	// Footer-এ developer information
	// পর্যায়ক্রমে typing effect দিয়ে দেখানো হবে।
	// =====================================================

	const footerTypingTexts = [

	  "Developed by Md. Al Mamun",
	  "MD. AL MAMUN",
	  "Full Stack Web Developer"

	];

	let ftIndex = 0;
	let ftChar = 0;
	let isFtDeleting = false;



	// =====================================================
	// Footer Typing Engine
	// Footer signature typing effect
	// control করার মূল function।
	// =====================================================

	function typeFooterDev() {

	  const el =
		document.getElementById('footerTyping');

	  if (!el) return;

	  const current =
		footerTypingTexts[ftIndex];

	  if (isFtDeleting) {

		ftChar--;

		el.textContent =
		  current.substring(0, ftChar);

	  } else {

		ftChar++;

		el.textContent =
		  current.substring(0, ftChar);

	  }

	  let speed =
		isFtDeleting ? 50 : 80;

	  // Pause when current text finishes
	  if (
		!isFtDeleting &&
		ftChar === current.length
	  ) {

		speed = 2200;
		isFtDeleting = true;

	  }

	  // Move to next footer text
	  else if (
		isFtDeleting &&
		ftChar === 0
	  ) {

		isFtDeleting = false;

		ftIndex =
		  (ftIndex + 1) %
		  footerTypingTexts.length;

	  }

	  setTimeout(typeFooterDev, speed);

	}



	// =====================================================
	// Initialize Footer Typing Effect
	// Footer typing animation শুরু করবে
	// page load হওয়ার পর।
	// =====================================================

	window.addEventListener('load', () => {

	  setTimeout(typeFooterDev, 1200);

	});
	
	
