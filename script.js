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
    // Donor Database
    // সব donor information এখানে store করা হয়েছে
    // ==============================
    const donors = [

{ name: "Md Harun", blood: "A+", photo: "https://i.ibb.co.com/hF4KxdT3/harun.jpg", profession: "Director of HPC", location: "Savar, Dhaka", age: 24, phone: "+8801889-783375", messenger: "md.harun.293247", verified: true, protectedNumber: false, blurredPhoto: true },
{ name: "Md Akram Hossain", blood: "AB+", photo: "https://i.postimg.cc/ryZjpQ8D/akramh.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 24, phone: "+8801402030317", messenger: "mdakramhossain.romjan", verified: true, protectedNumber: false, blurredPhoto: false },
{ name: "Suhag Mia", blood: "O-", photo: "https://i.postimg.cc/76kH03wM/suhag.jpg", profession: "Job Holder", location: "Mawna, Sreepur, Gazipur", age: 28, phone: "+8801629819804", messenger: "s.d.suhag.khan.2025", verified: true, protectedNumber: false, blurredPhoto: false },
{ name: "Iqbal Baher Robin", blood: "AB+", photo: "https://i.ibb.co.com/xttPgq9d/ibrobin.jpg", profession: "Entrepreneur", location: "Mawna, Sreepur, Gazipur", age: 40, phone: "+8801711-223344", messenger:"", verified: true, protectedNumber: true, blurredPhoto: false },
{ name: "Md Badal Mia", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 39, phone: "+881714883786", messenger:"", verified: true, protectedNumber: false, blurredPhoto: false },
{ name: "Md Al Amin", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Student", location: "Mawna, sreepur, gazipur", age: 28, phone: "+8801950172522", messenger:"", verified: true, protectedNumber: true, blurredPhoto: false },
{ name: "Jahidur Rahman", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 30, phone: "+88791664878", messenger:"Jr.khokon", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Rone Mia Shihab", blood: "B+", photo: "https://i.ibb.co.com/23yZzqy7/shihabr.jpg", profession: "Job Holder", location: "Mawna, sreepur, gazipur", age: 28, phone: "+8801710-509022", verified: true, protectedNumber: true, blurredPhoto: false },

{ name: "Towhid Rahman", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Managing Director", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801477820404", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Ibadul Chowdhury", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "General Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801889887455", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Lablu Islam", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Joint General Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801990622909", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Farzana Tithi", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Joint General Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

{ name: "Md Manik Hossain", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801767574979", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Monir Hossain", blood: "O+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801921628800", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Jannatul Ferdousi Boby", blood: "O+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

{ name: "Rabiul Islam Robi", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Assistant Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801615260635", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Afnan Ahmed Bijoy", blood: "B+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Assistant Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801728562229", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Mehedi Bepari", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Assistant Organizing Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801843364556", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Anowar Hossain", blood: "B+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801942104949", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Antora Akter", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Assistant Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

{ name: "Md Jahid Hossain", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Assistant Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801883909629", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Rahima Akter", blood: "B+", photo: "https://i.ibb.co.com/jNcN7ws/female.jpg", profession: "Assistant Publicity Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "", messenger: "", verified: true, protectedNumber: true, blurredPhoto: false },

{ name: "Md Raju Ahmed", blood: "A+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Office Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801745268355", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

{ name: "Md Yasin", blood: "AB+", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "Office Secretary", location: "Jirani, Ashulia, Savar", age: "", phone: "+8801830001685", messenger: "", verified: true, protectedNumber: false, blurredPhoto: false },

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

{ name: "Md. Safayet Ullah", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Dhanmondi", age: "", phone: "+8801680909520", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

{ name: "Abdus Samad Azad", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Farmgate", age: "", phone: "+8801758286147", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

{ name: "Consoler Jack Denver", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Gulshan", age: "", phone: "+8801865600400", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

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

{ name: "MD. SHAHADAT DEWAN", blood: "A-", photo: "https://i.ibb.co.com/wjy8hHn/male.jpg", profession: "", location: "Kaliakior, Gazipur", age: "", phone: "+8801734571212", messenger: "", verified: false, protectedNumber: false, blurredPhoto: false },

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
