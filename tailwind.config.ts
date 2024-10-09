import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F1E6',
        genres: {
          romance: '#FDEAEF',
          romanceText: '#AD1457',
          fantasy: '#EDE7F6',
          fantasyText: '#6A1B9A',
          thriller: '#FDE0DC',
          thrillerText: '#C62828',
          mystery: '#E3F2FD',
          mysteryText: '#1E3A8A',
          youngAdult: '#FFF59D',
          youngAdultText: '#616161',
          gothic: '#F0E6E6',
          gothicText: '#6B4444',
          humor: '#FFF3E0',
          humorText: '#EF6C00',
          classics: '#FBE9E7',
          classicsText: '#6D4C41',
          historicalFiction: '#D6F2F2',
          historicalFictionText: '#006666',
          paranormal: '#ECECF7',
          paranormalText: '#555575',
          literaryFiction: '#F7EBE4',
          literaryFictionText: '#7D5046',
          cozyFantasy: '#FDF1E0',
          cozyFantasyText: '#6B503C',
          magicalRealism: '#FCE8DF',
          magicalRealismText: '#8B5E34',
          darkRomance: '#F6D2D4',
          darkRomanceText: '#704545',
          darkAcademia: '#EADBCB',
          darkAcademiaText: '#705B4E',
          romcom: '#FDE5D9',
          romcomText: '#D81B60',
          suspense: '#ECEFF1',
          suspenseText: '#455A64',
        },
      },
    },
  },
  plugins: [],
};
export default config;
