const FishDataFormatted = () => {

    interface fishArray {
        id: number, name: string, difficulty: number, movementType: string, minSize: number, maxSize: number, time: string, season: string, weather: string, locations: string, minDepth: number, spawnMult: number, depthMult: number, fishingLevel: number
    };

    let fishData: fishArray[] = [
        {id: 128, name: "Pufferfish", difficulty: 80, movementType: "floater", minSize: 1, maxSize: 36, time: "1200-1600", season: "summer", weather: "sunny", locations: "690 .4 685 .1", minDepth: 4, spawnMult: .3, depthMult: .5, fishingLevel: 0},
        {id: 129, name: "Anchovy", difficulty: 30, movementType: "dart", minSize: 1, maxSize: 16, time: "600-2600", season: "spring fall", weather: "both", locations: "682 .2", minDepth: 1, spawnMult: .25, depthMult: .3, fishingLevel: 0},
        {id: 130, name: "Tuna", difficulty: 70, movementType: "smooth", minSize: 12, maxSize: 60, time: "600-1900", season: "summer winter", weather: "both", locations: "689 .35 681 .1", minDepth: 3, spawnMult: .15, depthMult: .55, fishingLevel: 0},
        {id: 131, name: "Sardine", difficulty: 30, movementType: "dart", minSize: 1, maxSize: 12, time: "600-1900", season: "spring summer fall winter", weather: "both", locations: "683 .3", minDepth: 1, spawnMult: .65, depthMult: .1, fishingLevel: 0},
        {id: 132, name: "Bream", difficulty: 35, movementType: "smooth", minSize: 12, maxSize: 30, time: "1800-2600", season: "spring summer fall winter", weather: "both", locations: "684 .35", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 136, name: "Largemouth Bass", difficulty: 50, movementType: "mixed", minSize: 11, maxSize: 30, time: "600-1900", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .2, fishingLevel: 0},
        {id: 137, name: "Smallmouth Bass", difficulty: 28, movementType: "mixed", minSize: 12, maxSize: 24, time: "600-2600", season: "spring fall", weather: "both", locations: "682 .2", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 138, name: "Rainbow Trout", difficulty: 45, movementType: "mixed", minSize: 10, maxSize: 25, time: "600-1900", season: "summer", weather: "sunny", locations: "684 .35", minDepth: 2, spawnMult: .35, depthMult: .3, fishingLevel: 0},
        {id: 139, name: "Salmon", difficulty: 50, movementType: "mixed", minSize: 24, maxSize: 65, time: "600-1900", season: "fall", weather: "both", locations: "684 .35", minDepth: 3, spawnMult: .4, depthMult: .2, fishingLevel: 0},
        {id: 140, name: "Walleye", difficulty: 45, movementType: "smooth", minSize: 10, maxSize: 40, time: "1200-2600", season: "fall winter", weather: "rainy", locations: "680 .35", minDepth: 2, spawnMult: .4, depthMult: .15, fishingLevel: 0},
        {id: 141, name: "Perch", difficulty: 35, movementType: "dart", minSize: 10, maxSize: 24, time: "600-2600", season: "winter", weather: "both", locations: "683 .2", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 142, name: "Carp", difficulty: 15, movementType: "mixed", minSize: 15, maxSize: 50, time: "600-2600", season: "spring summer fall", weather: "both", locations: "682 .2", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 143, name: "Catfish", difficulty: 75, movementType: "mixed", minSize: 12, maxSize: 72, time: "600-2400", season: "spring fall winter", weather: "rainy", locations: "689 .4 680 .1", minDepth: 4, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 144, name: "Pike", difficulty: 60, movementType: "dart", minSize: 15, maxSize: 60, time: "600-2600", season: "summer winter", weather: "both", locations: "690 .3 681 .1", minDepth: 3, spawnMult: .4, depthMult: .15, fishingLevel: 0},
        {id: 145, name: "Sunfish", difficulty: 30, movementType: "mixed", minSize: 5, maxSize: 15, time: "600-1900", season: "spring summer", weather: "sunny", locations: "683 .2", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 146, name: "Red Mullet", difficulty: 55, movementType: "smooth", minSize: 8, maxSize: 22, time: "600-1900", season: "summer winter", weather: "both", locations: "680 .25", minDepth: 2, spawnMult: .4, depthMult: .15, fishingLevel: 0},
        {id: 147, name: "Herring", difficulty: 25, movementType: "dart", minSize: 8, maxSize: 20, time: "600-2600", season: "spring winter", weather: "both", locations: "685 .2", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 148, name: "Eel", difficulty: 70, movementType: "smooth", minSize: 12, maxSize: 80, time: "1600-2600", season: "spring fall", weather: "rainy", locations: "689 .35 680 .1", minDepth: 3, spawnMult: .55, depthMult: .1, fishingLevel: 0},
        {id: 149, name: "Octopus", difficulty: 95, movementType: "sinker", minSize: 12, maxSize: 48, time: "600-1300", season: "summer", weather: "both", locations: "688 .6 684 .1", minDepth: 5, spawnMult: .1, depthMult: .08, fishingLevel: 0},
        {id: 150, name: "Red Snapper", difficulty: 40, movementType: "mixed", minSize: 8, maxSize: 25, time: "600-1900", season: "summer fall winter", weather: "rainy", locations: "682 .25", minDepth: 2, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 151, name: "Squid", difficulty: 75, movementType: "sinker", minSize: 12, maxSize: 48, time: "1800-2600", season: "winter", weather: "both", locations: "690 .35 680 .1", minDepth: 3, spawnMult: .35, depthMult: .3, fishingLevel: 0},
        {id: 152, name: "Seaweed", difficulty: 5, movementType: "floater", minSize: 5, maxSize: 30, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "-1", minDepth: 0, spawnMult: .3, depthMult: 0, fishingLevel: 0},
        {id: 153, name: "Green Algae", difficulty: 5, movementType: "floater", minSize: 5, maxSize: 30, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "-1", minDepth: 0, spawnMult: .3, depthMult: 0, fishingLevel: 0},
        {id: 154, name: "Sea Cucumber", difficulty: 40, movementType: "sinker", minSize: 3, maxSize: 20, time: "600-1900", season: "fall winter", weather: "both", locations: "683 .2 689 .4", minDepth: 3, spawnMult: .25, depthMult: .25, fishingLevel: 0},
        {id: 155, name: "Super Cucumber", difficulty: 80, movementType: "sinker", minSize: 12, maxSize: 36, time: "1800-2600", season: "summer winter", weather: "both", locations: "683 .2 689 .4", minDepth: 4, spawnMult: .1, depthMult: .25, fishingLevel: 0},
        {id: 156, name: "Ghostfish", difficulty: 50, movementType: "mixed", minSize: 10, maxSize: 35, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "684 .35", minDepth: 2, spawnMult: .3, depthMult: .3, fishingLevel: 0},
        {id: 157, name: "White Algae", difficulty: 5, movementType: "floater", minSize: 5, maxSize: 30, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "-1", minDepth: 0, spawnMult: .3, depthMult: 0, fishingLevel: 0},
        {id: 158, name: "Stonefish", difficulty: 65, movementType: "sinker", minSize: 15, maxSize: 15, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "689 .2", minDepth: 2, spawnMult: .1, depthMult: .1, fishingLevel: 3},
        {id: 159, name: "Crimsonfish", difficulty: 95, movementType: "mixed", minSize: 20, maxSize: 20, time: "600-2000", season: "winter", weather: "both", locations: "690 .15", minDepth: 4, spawnMult: .1, depthMult: .1, fishingLevel: 5},
        {id: 160, name: "Angler", difficulty: 85, movementType: "smooth", minSize: 18, maxSize: 18, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "690 .1", minDepth: 4, spawnMult: .05, depthMult: .1, fishingLevel: 3},
        {id: 161, name: "Ice Pip", difficulty: 85, movementType: "dart", minSize: 8, maxSize: 8, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "682 .1", minDepth: 2, spawnMult: .05, depthMult: .1, fishingLevel: 5},
        {id: 162, name: "Lava Eel", difficulty: 90, movementType: "mixed", minSize: 32, maxSize: 32, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "684 .1", minDepth: 2, spawnMult: .05, depthMult: .1, fishingLevel: 7},
        {id: 163, name: "Legend", difficulty: 110, movementType: "mixed", minSize: 50, maxSize: 50, time: "600-2000", season: "spring summer fall winter", weather: "rainy", locations: "688 .05", minDepth: 5, spawnMult: 0, depthMult: .1, fishingLevel: 10},
        {id: 164, name: "Sandfish", difficulty: 65, movementType: "mixed", minSize: 8, maxSize: 24, time: "600-2000", season: "spring summer fall winter", weather: "both", locations: "682 .2", minDepth: 1, spawnMult: .65, depthMult: .1, fishingLevel: 0},
        {id: 165, name: "Scorpion Carp", difficulty: 90, movementType: "dart", minSize: 12, maxSize: 32, time: "600-2000", season: "spring summer fall winter", weather: "both", locations: "683 .4", minDepth: 2, spawnMult: .15, depthMult: .1, fishingLevel: 4},
        {id: 267, name: "Flounder", difficulty: 50, movementType: "sinker", minSize: 4, maxSize: 16, time: "600-2000", season: "spring summer", weather: "both", locations: "680 .25", minDepth: 2, spawnMult: .15, depthMult: .05, fishingLevel: 0},
        {id: 269, name: "Midnight Carp", difficulty: 55, movementType: "mixed", minSize: 12, maxSize: 52, time: "2200-2600", season: "fall winter", weather: "both", locations: "682 .2", minDepth: 1, spawnMult: .33, depthMult: .1, fishingLevel: 0},
        {id: 682, name: "Mutant Carp", difficulty: 80, movementType: "dart", minSize: 36, maxSize: 36, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "688 .1", minDepth: 5, spawnMult: 0, depthMult: .02, fishingLevel: 0},
        {id: 698, name: "Sturgeon", difficulty: 78, movementType: "mixed", minSize: 12, maxSize: 60, time: "600-1900", season: "summer winter", weather: "both", locations: "689 .35 682 .1", minDepth: 3, spawnMult: .35, depthMult: .2, fishingLevel: 0},
        {id: 699, name: "Tiger Trout", difficulty: 60, movementType: "dart", minSize: 10, maxSize: 20, time: "600-1900", season: "spring summer fall winter", weather: "both", locations: "688 .45 685 .2", minDepth: 3, spawnMult: .2, depthMult: .1, fishingLevel: 0},
        {id: 700, name: "Bullhead", difficulty: 46, movementType: "smooth", minSize: 12, maxSize: 30, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "681 .25", minDepth: 2, spawnMult: .35, depthMult: .2, fishingLevel: 0},
        {id: 701, name: "Tilapia", difficulty: 50, movementType: "mixed", minSize: 11, maxSize: 30, time: "600-1400", season: "summer fall", weather: "both", locations: "683 .35", minDepth: 3, spawnMult: .4, depthMult: .2, fishingLevel: 0},
        {id: 702, name: "Chub", difficulty: 35, movementType: "dart", minSize: 12, maxSize: 24, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "684 .35", minDepth: 1, spawnMult: .45, depthMult: .1, fishingLevel: 0},
        {id: 704, name: "Dorado", difficulty: 78, movementType: "mixed", minSize: 24, maxSize: 32, time: "600-1900", season: "summer", weather: "both", locations: "689 .35 681 .1", minDepth: 3, spawnMult: .15, depthMult: .1, fishingLevel: 0},
        {id: 705, name: "Albacore", difficulty: 60, movementType: "mixed", minSize: 20, maxSize: 40, time: "600-1100&1800-2600", season: "fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .3, depthMult: .15, fishingLevel: 0},
        {id: 706, name: "Shad", difficulty: 45, movementType: "smooth", minSize: 20, maxSize: 48, time: "900-2600", season: "spring summer fall", weather: "rainy", locations: "684 .35", minDepth: 2, spawnMult: .35, depthMult: .2, fishingLevel: 0},
        {id: 707, name: "Lingcod", difficulty: 85, movementType: "mixed", minSize: 30, maxSize: 50, time: "600-2600", season: "winter", weather: "both", locations: "690 .4 685 .2", minDepth: 3, spawnMult: .3, depthMult: .05, fishingLevel: 0},
        {id: 708, name: "Halibut", difficulty: 50, movementType: "sinker", minSize: 10, maxSize: 33, time: "600-1100&1900-2600", season: "spring summer winter", weather: "both", locations: "681 .35", minDepth: 3, spawnMult: .4, depthMult: .2, fishingLevel: 0},
        {id: 734, name: "Woodskip", difficulty: 50, movementType: "mixed", minSize: 11, maxSize: 30, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .2, depthMult: .1, fishingLevel: 0},
        {id: 775, name: "Glacierfish", difficulty: 100, movementType: "mixed", minSize: 27, maxSize: 27, time: "600-2000", season: "winter", weather: "sunny", locations: "688 .1", minDepth: 5, spawnMult: 0, depthMult: .02, fishingLevel: 7},
        {id: 795, name: "Void Salmon", difficulty: 80, movementType: "mixed", minSize: 24, maxSize: 65, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 2, spawnMult: .33, depthMult: .1, fishingLevel: 0},
        {id: 796, name: "Slimejack", difficulty: 55, movementType: "dart", minSize: 8, maxSize: 25, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 798, name: "Midnight Squid", difficulty: 55, movementType: "sinker", minSize: 8, maxSize: 25, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 799, name: "Spook Fish", difficulty: 60, movementType: "dart", minSize: 8, maxSize: 25, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 800, name: "Blobfish", difficulty: 75, movementType: "floater", minSize: 8, maxSize: 25, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 836, name: "Stingray", difficulty: 80, movementType: "sinker", minSize: 18, maxSize: 60, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 4, spawnMult: .2, depthMult: .1, fishingLevel: 0},
        {id: 837, name: "Lionfish", difficulty: 50, movementType: "smooth", minSize: 3, maxSize: 12, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 3, spawnMult: .4, depthMult: .1, fishingLevel: 0},
        {id: 838, name: "Blue Discus", difficulty: 60, movementType: "dart", minSize: 2, maxSize: 9, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "685 .35", minDepth: 1, spawnMult: .25, depthMult: .1, fishingLevel: 0},
        {id: 898, name: "Son of Crimsonfish", difficulty: 95, movementType: "mixed", minSize: 20, maxSize: 20, time: "600-2000", season: "winter", weather: "both", locations: "690 .15", minDepth: 4, spawnMult: .1, depthMult: .1, fishingLevel: 5},
        {id: 899, name: "Ms. Angler", difficulty: 85, movementType: "smooth", minSize: 18, maxSize: 18, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "690 .1", minDepth: 4, spawnMult: .05, depthMult: .1, fishingLevel: 3},
        {id: 900, name: "Legend II", difficulty: 110, movementType: "mixed", minSize: 50, maxSize: 50, time: "600-2000", season: "spring summer fall winter", weather: "rainy", locations: "688 .05", minDepth: 5, spawnMult: 0, depthMult: .1, fishingLevel: 10},
        {id: 901, name: "Radioactive Carp", difficulty: 80, movementType: "dart", minSize: 36, maxSize: 36, time: "600-2600", season: "spring summer fall winter", weather: "both", locations: "688 .1", minDepth: 5, spawnMult: 0, depthMult: .02, fishingLevel: 0},
        {id: 902, name: "Glacierfish Jr.", difficulty: 100, movementType: "mixed", minSize: 27, maxSize: 27, time: "600-2000", season: "winter", weather: "sunny", locations: "688 .1", minDepth: 5, spawnMult: 0, depthMult: .02, fishingLevel: 7 }
    ];

    interface crabPotArray {
        id: number, name: string, chance: number, unused: string, location: string, minSize: number, maxSize: number
    };

    let crabPotData: crabPotArray[] = [
    {id: 372, name: "Clam", chance: .15, unused: "681 .35", location: "ocean", minSize: 1, maxSize: 5},
    {id: 715, name: "Lobster", chance: .05, unused: "688 .45 689 .35 690 .35", location: "ocean", minSize: 2, maxSize: 20},
    {id: 716, name: "Crayfish", chance: .35, unused: "682 .4", location: "freshwater", minSize: 1, maxSize: 8},
    {id: 717, name: "Crab", chance: .1, unused: "684 .45", location: "ocean", minSize: 1, maxSize: 20},
    {id: 718, name: "Cockle", chance: .3, unused: "680 .2", location: "ocean", minSize: 1, maxSize: 5},
    {id: 719, name: "Mussel", chance: .35, unused: "683 .15", location: "ocean", minSize: 1, maxSize: 5},
    {id: 720, name: "Shrimp", chance: .2, unused: "681 .35", location: "ocean", minSize: 1, maxSize: 3},
    {id: 721, name: "Snail", chance: .25, unused: "680 .35", location: "freshwater", minSize: 1, maxSize: 5},
    {id: 722, name: "Periwinkle", chance: .55, unused: "681 .35", location: "freshwater", minSize: 1, maxSize: 3},
    {id: 723, name: "Oyster", chance: .15, unused: "682 .35", location: "ocean", minSize: 1, maxSize: 5},
    ];

    return (
        <div>
            <p>{fishData[0].name}</p>
        </div>
    );
}

export default FishDataFormatted;