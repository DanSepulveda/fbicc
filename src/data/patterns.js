export const patterns = [
  {
    name: 'Introduction',
    id: 'pattern-1',
    usage: "Used to express our name or someone else's name.",
    components: [
      ['*Siapa nama', '+subject', '?'],
      ['*Nama', '+subject', 'name']
    ],
    examples: [
      {
        indonesian: 'Siapa_nama_kamu_?',
        english: 'What is your name?'
      },
      {
        indonesian: 'Nama_saya_Tom',
        english: 'My name is Tom'
      },
      {
        indonesian: 'Siapa_nama_ibumu?',
        english: "What is your mother's name?"
      },
      {
        indonesian: 'Nama_ibuku_Lucy',
        english: "My mother's name is Lucy"
      },
      {
        indonesian: 'Siapa_namanya_?',
        english: 'What is his/her name?'
      },
      {
        indonesian: 'Nama_dia_Carl',
        english: 'His name is Carl'
      },
      {
        indonesian: 'Siapa_nama_orang_itu_?',
        english: "What is that person's name?"
      },
      {
        indonesian: 'Namanya_Sofia',
        english: 'Her name is Sofia'
      }
    ]
  },
  {
    name: 'I live in ...',
    id: 'pattern-2',
    usage: 'Used to say the place where someone lives.',
    components: [
      ['*Dimana', '+subject', '*tinggal', '?'],
      ['+subject', '*tinggal di', 'place']
    ],
    examples: [
      {
        indonesian: 'Dimana_anda_tinggal_?',
        english: 'Where do you live?'
      },
      {
        indonesian: 'Aku_tinggal_di_Indonesia',
        english: 'I live in Indonesia'
      },
      {
        indonesian: 'Dimana_ayahmu_tinggal_?',
        english: 'Where does your father live?'
      },
      {
        indonesian: 'Dia_tinggal_di_Amerika',
        english: 'He lives in America'
      },
      {
        indonesian: 'Dimana_orang tua_kamu_tinggal?',
        english: 'Where do your parents live?'
      },
      {
        indonesian: 'Mereka_tinggal_di_kota_Surabaya',
        english: 'They live in Surabaya city'
      },
      {
        indonesian: 'Dimana_nenekku_tinggal?',
        english: 'Where does your grandmother live?'
      },
      {
        indonesian: 'Nenekku_tinggal_di_kota_New York',
        english: 'My grandmother lives in New York city'
      }
    ]
  },
  {
    name: 'Sentence structure',
    id: 'pattern-3',
    usage:
      "Basic sentence structure. To make neggative statements, simply add 'tidak' between the subject and the verb.",
    components: [
      ['+sub', '+verb', '+obj', '-rest...'],
      ['+sub', '*tidak', '+verb', '+obj', '-rest...']
    ],
    examples: [
      {
        indonesian: 'Aku_baik',
        english: 'I am fine'
      },
      {
        indonesian: 'Aku_tidak_baik',
        english: 'I am not fine'
      },
      {
        indonesian: 'Aku_tinggal_dengan_keluarga_saya',
        english: 'I live with my family'
      },
      {
        indonesian: 'Aku_tidak_tinggal_di_Indonesia',
        english: "I don't live in Indonesia"
      },
      {
        indonesian: 'Aku_belajar_bahasa Indonesia_di_rumah_saya',
        english: 'I study indonesian in my house'
      },
      {
        indonesian: 'Aku_tidak_mau_renang_saat ini',
        english: "I don't want to swim right now"
      }
    ]
  },
  {
    name: 'How often do you...?',
    id: 'pattern-4',
    usage: 'Used to describe how often an action happens.',
    components: [
      ['*Seberapa sering', '+subject', '+verb', '?'],
      ['+Subject', '+frequency', '+verb', 'rest...']
    ],
    examples: [
      {
        indonesian: 'Seberapa sering_kamu_nonton_tv_?',
        english: 'How often do you watch TV?'
      },
      {
        indonesian: 'Aku_tidak pernah_nonton_tv',
        english: 'I never watch TV'
      },
      {
        indonesian: 'Seberapa sering_kalian_baca buku_?',
        english: 'How often do you read books?'
      },
      {
        indonesian: 'Kami_jarang_baca buku',
        english: 'We rarely read books'
      },
      {
        indonesian: 'Seberapa sering_anakmu_main game_?',
        english: 'How often do your child play games?'
      },
      {
        indonesian: 'Anakku_kadang-kadang_main game',
        english: 'My child sometimes play games'
      },
      {
        indonesian: 'Seberapa sering_kamu_mendengarkan musik_?',
        english: 'How often do you listen to music??'
      },
      {
        indonesian: 'Aku_sering_mendengarkan musik',
        english: 'I often listen to music'
      },
      {
        indonesian: 'Seberapa sering_keluargamu_makan_nasi goreng_?',
        english: 'How often do your family eat nasi goreng?'
      },
      {
        indonesian: 'Keluarkaku_biasanya_makan_nasi goreng',
        english: 'My family usually eat nasi goreng'
      },
      {
        indonesian: 'Seberapa sering_anda_belajar_bahasa Indonesia_?',
        english: 'How often do you study indonesian?'
      },
      {
        indonesian: 'Saya_selalu_belajar_bahasa Indonesia',
        english: 'I always study indonesian'
      }
    ]
  },
  {
    name: 'What day ....? - What date...?',
    id: 'pattern-5',
    usage: 'Used to ask about days and dates.',
    components: [
      ['*Hari apa', '+adverb of time', '?'],
      ['+adverb of time', '*hari', 'day'],
      ['*Tanggal berapa', '+adverb of time', '?'],
      ['+adverb of time', '*tanggal', 'date']
    ],
    examples: [
      {
        indonesian: 'Hari apa_sekarang_?',
        english: 'What day is it today?'
      },
      {
        indonesian: 'Sekarang_hari_rabu',
        english: 'Today is Wednesday'
      },
      {
        indonesian: 'Hari apa_kemarin_?',
        english: 'What day was yesterday?'
      },
      {
        indonesian: 'Kemarin_hari_selasa',
        english: 'Yesterday was Tuesday'
      },
      {
        indonesian: 'Hari apa_lusa_?',
        english: 'What day is the day after tomorrow?'
      },
      {
        indonesian: 'Lusa_hari_jumat',
        english: 'The day after tomorrow is Friday'
      },
      {
        indonesian: 'Tanggal berapa_hari ini_?',
        english: 'What date is it today?'
      },
      {
        indonesian: 'Hari ini_tanggal_tiga_mei',
        english: 'Today is the 3rd of May'
      },
      {
        indonesian: 'Tanggal berapa_besok_?',
        english: 'What date is tomorrow?'
      },
      {
        indonesian: 'Besok_tanggal_empat_agustus',
        english: 'Tomorrow is the 4th of Augustus'
      },
      {
        indonesian: 'Tanggal berapa_minggu depan_?',
        english: 'What date is the next week?'
      },
      {
        indonesian: 'Minggu depan_tanggal_sepuluh_maret',
        english: 'The next week is the 10th of March'
      }
    ]
  },
  {
    name: 'What time do you...?',
    id: 'pattern-6',
    usage: 'Used to ask/describe the time an action is performed.',
    components: [
      ['*Jam berapa', '+subject', '+verb', '?'],
      ['+Subject', '+verb', '*jam', 'time']
    ],
    examples: [
      {
        indonesian: 'Jam berapa_adik laki-laki_tidur_?',
        english: 'What time do your younger brother go to sleep?'
      },
      {
        indonesian: 'Dia_tidur_jam_sepuluh_malam',
        english: 'He goes to sleep at 10:00pm'
      },
      {
        indonesian: 'Jam berapa_ibumu_masak_sarapan_?',
        english: 'What time does your mother cook breakfast?'
      },
      {
        indonesian: 'Dia_masak_sarapan_jam_tujuh_pagi',
        english: 'She cooks breakfast at 7:00am'
      },
      {
        indonesian: 'Jam berapa_kamu_pergi_ke_kantor_?',
        english: 'What time do you go to the office?'
      },
      {
        indonesian: 'Aku_pergi_ke_kantor_jam_delapan_pagi',
        english: 'I go to the office at 8:00am'
      },
      {
        indonesian: 'Jam berapa_suami_kamu_olahraga_?',
        english: 'What time do your husband exercise?'
      },
      {
        indonesian: 'Dia_olahraga_di_rumah_jam_empat_sore',
        english: 'He does exercice at home at 4:00pm'
      }
    ]
  },
  {
    name: 'Where is  ...?',
    id: 'pattern-7',
    usage: 'Used to ask/describe the position of an object/person in reference to another one.',
    components: [
      ['*Dimana letak', '+noun', '*itu', '?'],
      ['+noun', '*itu di', '+position', '+ref']
    ],
    examples: [
      {
        indonesian: 'Dimana_letak_tanaman_itu_?',
        english: 'Where is that plant?'
      },
      {
        indonesian: 'Tanaman_itu_di_belakang_beruang',
        english: 'That plant is behind the bear'
      },
      {
        indonesian: 'Dimana_letak_jam dinding_itu_?',
        english: 'Where is that clock?'
      },
      {
        indonesian: 'Jam dinding_itu_di_kanan_pintu',
        english: 'That clock is to the right of the door'
      },
      {
        indonesian: 'Dimana_letak_tv_itu_?',
        english: 'Where is that tv?'
      },
      {
        indonesian: 'TV_itu_di_atas_kardus',
        english: 'That TV is on the box'
      },
      {
        indonesian: 'Dimana_letak_bank_itu_?',
        english: 'Where is that bank?'
      },
      {
        indonesian: 'Bank_itu_di_kiri_toko buku',
        english: 'That bank is to the left of the bookstore'
      },
      {
        indonesian: 'Dimana_letak_buku_itu_?',
        english: 'Where is that book?'
      },
      {
        indonesian: 'Buku_itu_di_bawah_sofa',
        english: 'That book is under the sofa'
      },
      {
        indonesian: 'Dimana_letak_mobil_itu_?',
        english: 'Where is that car?'
      },
      {
        indonesian: 'Mobil_itu_di_depan_bank',
        english: 'That car is in front of the bank'
      },
      {
        indonesian: 'Dimana_letak_kursi_itu_?',
        english: 'Where is that chair?'
      },
      {
        indonesian: 'Kursi_itu_di_antara_sofa_dan_meja',
        english: 'That chair is between sofa and table'
      }
    ]
  },
  {
    name: 'What do you want to ...?',
    id: 'pattern-8',
    usage: 'Used to ask/describe what we want.',
    components: [
      ['+subject', '*mau', '+verb', '*apa', '?'],
      ['+subject', '*mau', '+verb', 'rest...']
    ],
    examples: [
      {
        indonesian: 'Kamu_mau_makan_apa_?',
        english: 'What do you want to eat?'
      },
      {
        indonesian: 'Aku_mau_makan_Sate Ayam',
        english: 'I want to eat Sate Ayam'
      },
      {
        indonesian: 'Istrimu_mau_makan_apa_?',
        english: 'What does your wife want to eat?'
      },
      {
        indonesian: 'Dia_mau_makan_Rendang',
        english: 'She wants to eat Rendang'
      },
      {
        indonesian: 'Kakek_kamu_mau_minum_apa_?',
        english: 'What does your grandfather want to drink?'
      },
      {
        indonesian: 'Dia_mau_minum_teh',
        english: 'He wants to drink tea'
      },
      {
        indonesian: 'Anak-anak_kamu_mau_minum_apa_?',
        english: 'What do your children want to drink?'
      },
      {
        indonesian: 'Mereka_mau_minum_jus jeruk',
        english: 'They want to drink orange juice'
      },
      {
        indonesian: 'Aku_mau_belajar_bahasa_Indonesia',
        english: 'I want to study indonesian'
      },
      {
        indonesian: 'Aku_mau_pergi_ke_Indonesia',
        english: 'I want to go to Indonesia'
      },
      {
        indonesian: 'Aku_mau_nyanyi_lagu',
        english: 'I want to sing a song'
      },
      {
        indonesian: 'Aku_mau_bincang-bincang_dengan_kamu',
        english: 'I want to talk with you'
      }
    ]
  }
]
