<template>
    <div class="pb-16">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Dream Team
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="247432cb-6e6c-4bec-9766-564ed7c230dc" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)" width="52" height="24"></rect>
            </svg>
            <span class="relative">Welcome</span>
          </span>
          our talented team of professionals
        </h2>
      </div>
      <div class="w-full bg-gray-100 px-10 pt-10">
        <div class="container mx-auto">
          <div class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div v-for="member in team" :key="member.id" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div class="h-300 rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img :src="member.photoUrl" alt="" class="rounded-full object-cover h-full w-full shadow-md" />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <div class="font-bold text-3xl text-center pb-1">{{ member.name }}</div>
                  <p class="text-gray-800 text-sm text-center">{{ member.jobTitle }}</p>
                  <p class="text-center text-gray-600 text-base pt-3 font-normal">{{ member.jobText }}</p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <a :href="member.githubUrl" class="mx-5">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" class="mx-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" class="mx-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5">{{ member.name }}</rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "GrayBgWithDescription",
  
    data() {
    return {
      team: [
        {
          id: 1,
          name: "Berhone Hamza",
          jobTitle: "Developer",
          photoUrl: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
          jobText:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        },
        {
          id: 2,
          name: "Errabeh Saif Eddine",
          jobTitle: "Developer",
          photoUrl: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
          jobText:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        },
        {
          id: 3,
          name: "Zaba Amer",
          jobTitle: "Developer",
          photoUrl: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
          jobText:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        },
        {
          id: 4,
          name: "Chada Aya",
          jobTitle: "CEO",
          photoUrl: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
          jobText:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        },
        {
          id: 5,
          name: "Andres Berlin",
          jobTitle: "CEO",
          photoUrl: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
          jobText:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        },
      ],
    };
  },
  };
  </script>
  