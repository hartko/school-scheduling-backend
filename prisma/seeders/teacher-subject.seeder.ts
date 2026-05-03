import { PrismaClient } from "@prisma/client";

export async function seedTeacherSubjects(prisma: PrismaClient) {
  const assignments: Record<string, string[]> = {
    'TCH-001': ['ENG1',       'ENG2',       'GE-PC'      ],  // 3
    'TCH-002': ['ENG3',       'ENG4',       'HUMSS-CW'   ],  // 3
    'TCH-003': ['FIL1',       'FIL2',       'FIL3'       ],  // 3  (FIL4 → TCH-030)
    'TCH-004': ['AP1',        'AP2',        'GE-RPH'     ],  // 3
    'TCH-005': ['AP3',        'AP4',        'GE-TCW'     ],  // 3  (HUMSS-PPG → TCH-027)
    'TCH-006': ['MATH1',      'MATH2',      'ABM-BMATH'  ],  // 3
    'TCH-007': ['MATH3',      'MATH4',      'GE-MMW'     ],  // 3  (STEM-PCAL → TCH-011, STEM-BCAL → TCH-029)
    'TCH-008': ['SCI1',       'SCI2',       'STEM-ELS'   ],  // 3
    'TCH-009': ['SCI3',       'STEM-GCHEM1','STEM-GCHEM2'],  // 3
    'TCH-010': ['SCI4',       'STEM-GPHY1', 'STEM-GPHY2' ],  // 3
    'TCH-011': ['STEM-GBIO1', 'STEM-GBIO2', 'STEM-PCAL'  ],  // 3  (added STEM-PCAL)
    'TCH-012': ['TLE',        'TVL-FBS',    'TVL-BPP'    ],  // 3
    'TCH-013': ['MAPEH1',     'MAPEH2',     'MAPEH3'     ],  // 3  (MAPEH4 → TCH-030)
    'TCH-014': ['ESP1',       'ESP2',       'ESP3'       ],  // 3  (ESP4 → TCH-030)
    'TCH-015': ['HUMSS-IWR',  'HUMSS-CE',   'GE-PC'      ],  // 3
    'TCH-016': ['CS-ICOMP',   'CS-CPROG1',  'CS-CPROG2'  ],  // 3
    'TCH-017': ['CS-DSA',     'CS-OOP',     'CS-DISCMATH' ],  // 3
    'TCH-018': ['CS-DBMS',    'CS-OS',      'CS-CN'      ],  // 3
    'TCH-019': ['TVL-CHS',    'CS-WD',      'CS-MAD'     ],  // 3
    'TCH-020': ['CS-AI',      'CS-CAP1',    'CS-CAP2'    ],  // 3
    'TCH-021': ['ABM-FACCTG', 'ACCTG1',     'ACCTG2'     ],  // 3
    'TCH-022': ['ACCTG-COST', 'ACCTG-MGT',  'ACCTG-AUD'  ],  // 3
    'TCH-023': ['ABM-BF',     'ABM-OM',     'ABM-AECON'  ],  // 3
    'TCH-024': ['BA-BLAW',    'BA-POM',     'BA-MM'      ],  // 3
    'TCH-025': ['BA-HRM',     'BA-OM',      'BA-SM'      ],  // 3
    'TCH-026': ['ED-CAD',     'ED-TP',      'ED-CI'      ],  // 3
    'TCH-027': ['ED-CAD',     'ED-TP',      'HUMSS-PPG'  ],  // 3  (2nd ED teacher + HUMSS-PPG)
    'TCH-028': ['ED-FS1',     'ED-FS2',     'ED-PT'      ],  // 3
    'TCH-029': ['GE-RPH',     'GE-PC',      'STEM-BCAL'  ],  // 3  (2nd GE-RPH + GE-PC + STEM-BCAL)
    'TCH-030': ['FIL4',       'MAPEH4',     'ESP4'       ],  // 3  (covers all G10 orphans)
  };

  const teachers = await prisma.teacher.findMany();
  const subjects = await prisma.subject.findMany();
  const teacherMap = new Map(teachers.map((t) => [t.teacher_code, t.id]));
  const subjectMap = new Map(subjects.map((s) => [s.code, s.id]));

  const data: { teacher_id: number; subject_id: number }[] = [];
  for (const [code, subjectCodes] of Object.entries(assignments)) {
    const teacherId = teacherMap.get(code);
    if (!teacherId) continue;
    for (const sc of subjectCodes) {
      const subjectId = subjectMap.get(sc);
      if (!subjectId) continue;
      data.push({ teacher_id: teacherId, subject_id: subjectId });
    }
  }

  await prisma.teacherSubject.createMany({ data, skipDuplicates: true });
  console.log(`  ✔ teacher-subjects: ${data.length} records`);
}
