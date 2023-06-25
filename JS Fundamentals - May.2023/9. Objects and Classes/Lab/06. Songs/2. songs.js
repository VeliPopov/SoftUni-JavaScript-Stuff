function songs(params) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = params.shift();
    let songs = [];

    for (let index = 0; index < numberOfSongs; index++) {
        let [typeList, name, time] = params[index].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    let typeList = params[numberOfSongs];

    for (let i = 0; i < songs.length; i++) {
        if (songs[i].typeList === typeList || typeList === 'all') {
            console.log(songs[i].name);
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])