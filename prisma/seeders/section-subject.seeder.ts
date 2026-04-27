import { PrismaClient } from "@prisma/client";

interface SubjectAssignment {
  code: string;
  units?: number;
}

export async function seedSectionSubjects(prisma: PrismaClient) {
  // Each entry represents one semester's course load.
  // College: 6 subjects × 3 units = 18 class periods/week per section (realistic)
  // JHS:     8 subjects × 1 unit  =  8 class periods/week per section
  // SHS:     4-6 subjects × 1 unit = 4-6 class periods/week per section
  const assignments: Record<string, SubjectAssignment[]> = {

    // ─── BSBA Financial Management (6 subjects, 18 units) ─────────────────────
    'FM': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-RPH',      units: 3 },
      { code: 'ABM-BMATH',   units: 3 },
      { code: 'ABM-BF',      units: 3 },
      { code: 'ACCTG1',      units: 3 },
      { code: 'BA-POM',      units: 3 },
    ],

    // ─── BSBA Marketing Management (6 subjects, 18 units) ─────────────────────
    'MM': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-TCW',      units: 3 },
      { code: 'ABM-BMATH',   units: 3 },
      { code: 'ABM-OM',      units: 3 },
      { code: 'BA-BLAW',     units: 3 },
      { code: 'BA-MM',       units: 3 },
    ],

    // ─── BSCS (6 subjects, 18 units) ──────────────────────────────────────────
    'BSCS': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-MMW',      units: 3 },
      { code: 'CS-ICOMP',    units: 3 },
      { code: 'CS-CPROG1',   units: 3 },
      { code: 'CS-DSA',      units: 3 },
      { code: 'CS-DISCMATH', units: 3 },
    ],

    // ─── BSE English (6 subjects, 18 units) ───────────────────────────────────
    'BSEENG': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-MMW',      units: 3 },
      { code: 'ENG1',        units: 3 },
      { code: 'ENG2',        units: 3 },
      { code: 'ED-CAD',      units: 3 },
      { code: 'ED-TP',       units: 3 },
    ],

    // ─── BSE Filipino (6 subjects, 18 units) ──────────────────────────────────
    'BSEFIL': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-RPH',      units: 3 },
      { code: 'FIL1',        units: 3 },
      { code: 'FIL2',        units: 3 },
      { code: 'ED-CAD',      units: 3 },
      { code: 'ED-TP',       units: 3 },
    ],

    // ─── BSE Mathematics (6 subjects, 18 units) ───────────────────────────────
    'BSEMATH': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-MMW',      units: 3 },
      { code: 'MATH1',       units: 3 },
      { code: 'MATH2',       units: 3 },
      { code: 'STEM-PCAL',   units: 3 },
      { code: 'ED-CAD',      units: 3 },
    ],

    // ─── BSE Social Studies (6 subjects, 18 units) ────────────────────────────
    'BSESS': [
      { code: 'GE-PC',       units: 3 },
      { code: 'GE-RPH',      units: 3 },
      { code: 'AP1',         units: 3 },
      { code: 'AP2',         units: 3 },
      { code: 'HUMSS-PPG',   units: 3 },
      { code: 'ED-CAD',      units: 3 },
    ],

    // ─── JHS Grade 7-10 DHS (8 subjects, 1 period/week each) ─────────────────
    'DG7':  [{ code: 'ENG1' }, { code: 'FIL1' }, { code: 'MATH1' }, { code: 'SCI1' }, { code: 'AP1' }, { code: 'TLE' }, { code: 'MAPEH1' }, { code: 'ESP1' }],
    'DG8':  [{ code: 'ENG2' }, { code: 'FIL2' }, { code: 'MATH2' }, { code: 'SCI2' }, { code: 'AP2' }, { code: 'TLE' }, { code: 'MAPEH2' }, { code: 'ESP2' }],
    'DG9':  [{ code: 'ENG3' }, { code: 'FIL3' }, { code: 'MATH3' }, { code: 'SCI3' }, { code: 'AP3' }, { code: 'TLE' }, { code: 'MAPEH3' }, { code: 'ESP3' }],
    'DG10': [{ code: 'ENG4' }, { code: 'FIL4' }, { code: 'MATH4' }, { code: 'SCI4' }, { code: 'AP4' }, { code: 'TLE' }, { code: 'MAPEH4' }, { code: 'ESP4' }],

    // ─── JHS Grade 7-10 NHS (8 subjects, 1 period/week each) ─────────────────
    'NG7':  [{ code: 'ENG1' }, { code: 'FIL1' }, { code: 'MATH1' }, { code: 'SCI1' }, { code: 'AP1' }, { code: 'TLE' }, { code: 'MAPEH1' }, { code: 'ESP1' }],
    'NG8':  [{ code: 'ENG2' }, { code: 'FIL2' }, { code: 'MATH2' }, { code: 'SCI2' }, { code: 'AP2' }, { code: 'TLE' }, { code: 'MAPEH2' }, { code: 'ESP2' }],
    'NG9':  [{ code: 'ENG3' }, { code: 'FIL3' }, { code: 'MATH3' }, { code: 'SCI3' }, { code: 'AP3' }, { code: 'TLE' }, { code: 'MAPEH3' }, { code: 'ESP3' }],
    'NG10': [{ code: 'ENG4' }, { code: 'FIL4' }, { code: 'MATH4' }, { code: 'SCI4' }, { code: 'AP4' }, { code: 'TLE' }, { code: 'MAPEH4' }, { code: 'ESP4' }],

    // ─── SHS Grade 11-12 ──────────────────────────────────────────────────────
    'GAS11':  [{ code: 'ENG1' }, { code: 'FIL1' }, { code: 'MATH1' }, { code: 'SCI1' }, { code: 'MAPEH1' }, { code: 'ESP1' }],
    'GAS12':  [{ code: 'ENG2' }, { code: 'FIL2' }, { code: 'MATH2' }, { code: 'SCI2' }, { code: 'MAPEH2' }, { code: 'ESP2' }],
    'ABM11':  [{ code: 'ABM-BMATH' }, { code: 'ABM-BF' }, { code: 'ABM-FACCTG' }, { code: 'ABM-OM' }, { code: 'ABM-AECON' }],
    'ABM12':  [{ code: 'ABM-BMATH' }, { code: 'ABM-BF' }, { code: 'ABM-FACCTG' }, { code: 'ABM-OM' }, { code: 'BA-BLAW' }],
    'STEM11': [{ code: 'STEM-PCAL' }, { code: 'STEM-GCHEM1' }, { code: 'STEM-GBIO1' }, { code: 'STEM-GPHY1' }, { code: 'STEM-ELS' }],
    'STEM12': [{ code: 'STEM-BCAL' }, { code: 'STEM-GCHEM2' }, { code: 'STEM-GBIO2' }, { code: 'STEM-GPHY2' }],
    'HUMSS11':[{ code: 'HUMSS-CW' }, { code: 'HUMSS-IWR' }, { code: 'HUMSS-PPG' }, { code: 'HUMSS-CE' }],
    'HUMSS12':[{ code: 'HUMSS-CW' }, { code: 'HUMSS-IWR' }, { code: 'HUMSS-PPG' }, { code: 'HUMSS-CE' }],
    'TVL11':  [{ code: 'TVL-FBS' }, { code: 'TVL-CHS' }, { code: 'TVL-BPP' }],
    'TVL12':  [{ code: 'TVL-FBS' }, { code: 'TVL-CHS' }, { code: 'TVL-BPP' }],
  };

  const sections = await prisma.section.findMany();
  const subjects = await prisma.subject.findMany();
  const subjectMap = new Map(subjects.map((s) => [s.code, s.id]));

  const data: { section_id: number; subject_id: number; units?: number }[] = [];
  for (const section of sections) {
    const prefix = Object.keys(assignments)
      .sort((a, b) => b.length - a.length)
      .find((p) => section.code.startsWith(p));
    if (!prefix) continue;
    for (const { code, units } of assignments[prefix]) {
      const subjectId = subjectMap.get(code);
      if (!subjectId) continue;
      data.push({ section_id: section.id, subject_id: subjectId, units });
    }
  }

  await prisma.sectionSubject.deleteMany({});
  await prisma.sectionSubject.createMany({ data });
  console.log(`  ✔ section-subjects: ${data.length} records`);
}
