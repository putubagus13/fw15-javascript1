const level= ['Beginner', 'Advanced', 'expert'];
let biodata = {
    nama: "Putu Bagus Raditya", 
    umur: 23,
    hobi: ["olahraga", "Menulis", "Bersepeda"],
    statusMenikah: false,
    listSekolah: [
        { namaSekolah: "SDN 1 Srigading", tahunMasuk: 2006, tahunLulus: 2012, jurusan: null },
        { namaSekolah: "SMPN 2 Labuhan Maringgai", tahunMasuk: 2012, tahunLulus: 2015, jurusan: null },
        { namaSekolah: "SMAN 1 Way Jepara", tahunMasuk: 2015, tahunLulus: 2018, jurusan: "IPA" },
        { namaSekolah: "Universitas Lampung", tahunMasuk: 2018, tahunLulus: 2023, jurusan: "Fisika" }
    ],
    skills: [
        {namaSkil: "Dapat mengoprasikan Microsoft Word", level: level[1]},
        {namaSkil: "Dapat mengoprasikan Microsoft Excel", level: level[1]},
        {namaSkil: "Dapat mengoprasikan Adobe Ilustrator", level: level[0]}
    ]}

    console.log(biodata);