import { PrismaClient } from "@prisma/client";

export async function seedSections(prisma: PrismaClient) {
    const predefinedSections = [
        { code: "FM1A", name: "BSBA Financial Management 1A" },
        { code: "FM1B", name: "BSBA Financial Management 1B" },
        { code: "MM1A", name: "BSBA Marketing Management 1A" },
        { code: "MM1B", name: "BSBA Marketing Management 1B" },

        { code: "FM2A", name: "BSBA Financial Management 2A" },
        { code: "FM2B", name: "BSBA Financial Management 2B" },
        { code: "FM2C", name: "BSBA Financial Management 2C" },
        { code: "MM2A", name: "BSBA Marketing Management 2A" },

        { code: "FM3A", name: "BSBA Financial Management 3A" },
        { code: "FM3B", name: "BSBA Financial Management 3B" },
        { code: "MM3A", name: "BSBA Marketing Management 3A" },

        { code: "FM4A", name: "BSBA Financial Management 4A" },
        { code: "FM4B", name: "BSBA Financial Management 4B" },
        { code: "MM4A", name: "BSBA Marketing Management 4A" },

        { code: "BSCS1A", name: "BSCS1A" },
        { code: "BSCS1B", name: "BSCS1B" },
        { code: "BSCS2A", name: "BSCS2A" },
        { code: "BSCS2B", name: "BSCS2B" },
        { code: "BSCS3A", name: "BSCS3A" },
        { code: "BSCS4A", name: "BSCS4A" },
        { code: "BSCS4B", name: "BSCS4B" },

        { code: "BSEENG1A", name: "BSE English 1A" },
        { code: "BSEENG2A", name: "BSE English 2A" },
        { code: "BSEENG3A", name: "BSE English 3A" },
        { code: "BSEENG4A", name: "BSE English 4A" },

        { code: "BSEFIL1A", name: "BSE Filipino 1A" },
        { code: "BSEFIL1B", name: "BSE Filipino 1B" },
        { code: "BSEFIL2A", name: "BSE Filipino 2A" },
        { code: "BSEFIL2B", name: "BSE Filipino 2B" },
        { code: "BSEFIL3A", name: "BSE Filipino 3A" },
        { code: "BSEFIL3B", name: "BSE Filipino 3B" },
        { code: "BSEFIL4A", name: "BSE Filipino 4A" },

        { code: "BSEMATH1A", name: "BSE Math 1A" },
        { code: "BSEMATH2A", name: "BSE Math 2A" },
        { code: "BSEMATH3A", name: "BSE Math 3A" },
        { code: "BSEMATH4A", name: "BSE Math 4A" },

        { code: "BSESS1A", name: "BSE Social Studies 1A" },
        { code: "BSESS1B", name: "BSE Social Studies 1B" },
        { code: "BSESS2A", name: "BSE Social Studies 2A" },
        { code: "BSESS2B", name: "BSE Social Studies 2B" },
        { code: "BSESS3A", name: "BSE Social Studies 3A" },
        { code: "BSESS4A", name: "BSE Social Studies 4A" },

        { code: "DG7A", name: "Grade 7A (DHS)" },
        { code: "DG7B", name: "Grade 7B (DHS)" },
        { code: "DG8A", name: "Grade 8A (DHS)" },
        { code: "DG8B", name: "Grade 8B (DHS)" },
        { code: "DG9A", name: "Grade 9A (DHS)" },
        { code: "DG9B", name: "Grade 9B (DHS)" },
        { code: "DG10A", name: "Grade 10A (DHS)" },
        { code: "DG10B", name: "Grade 10B (DHS)" },
        { code: "DG10C", name: "Grade 10C (DHS)" },

        { code: "NG7A", name: "Grade 7A (NHS)" },
        { code: "NG8A", name: "Grade 8A (NHS)" },
        { code: "NG9A", name: "Grade 9A (NHS)" },
        { code: "NG10A", name: "Grade 10A (NHS)" },

        { code: "GAS11A", name: "GAS 11A" },
        { code: "GAS11B", name: "GAS 11B" },
        { code: "ABM11", name: "ABM 11" },
        { code: "STEM11", name: "STEM 11" },
        { code: "HUMSS11", name: "HUMSS 11" },
        { code: "TVL11", name: "TVL 11" },

        { code: "GAS12", name: "GAS 12" },
        { code: "ABM12", name: "ABM 12" },
        { code: "STEM12", name: "STEM 12" },
        { code: "HUMSS12A", name: "HUMSS 12A" },
        { code: "HUMSS12B", name: "HUMSS 12B" },
        { code: "TVL12A", name: "TVL 12A" }
    ];

    await prisma.section.createMany({
        data: predefinedSections,
        skipDuplicates: true,
    });
}