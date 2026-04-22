import { PrismaClient } from "@prisma/client";

export async function seedTeachers(prisma: PrismaClient) {
    const predefinedTeachers = [
        { first_name: 'Maria', middle_name: 'Santos', last_name: 'Reyes', teacher_code: 'TCH-001', email: 'maria.reyes@school.sci.edu.ph' },
        { first_name: 'Jose', middle_name: 'Cruz', last_name: 'Dela Cruz', teacher_code: 'TCH-002', email: 'jose.delacruz@school.sci.edu.ph' },
        { first_name: 'Ana', middle_name: 'Lopez', last_name: 'Garcia', teacher_code: 'TCH-003', email: 'ana.garcia@school.sci.edu.ph' },
        { first_name: 'Ricardo', middle_name: 'Bautista', last_name: 'Mendoza', teacher_code: 'TCH-004', email: 'ricardo.mendoza@school.sci.edu.ph' },
        { first_name: 'Lorna', middle_name: 'Villanueva', last_name: 'Torres', teacher_code: 'TCH-005', email: 'lorna.torres@school.sci.edu.ph' },
        { first_name: 'Eduardo', middle_name: 'Ramos', last_name: 'Castillo', teacher_code: 'TCH-006', email: 'eduardo.castillo@school.sci.edu.ph' },
        { first_name: 'Cristina', middle_name: 'Flores', last_name: 'Aquino', teacher_code: 'TCH-007', email: 'cristina.aquino@school.sci.edu.ph' },
        { first_name: 'Ramon', middle_name: 'Dimaculangan', last_name: 'Navarro', teacher_code: 'TCH-008', email: 'ramon.navarro@school.sci.edu.ph' },
        { first_name: 'Josephine', middle_name: 'Tan', last_name: 'Pascual', teacher_code: 'TCH-009', email: 'josephine.pascual@school.sci.edu.ph' },
        { first_name: 'Antonio', middle_name: 'Guerrero', last_name: 'Lim', teacher_code: 'TCH-010', email: 'antonio.lim@school.sci.edu.ph' },
        { first_name: 'Rosario', middle_name: 'Cabrera', last_name: 'Fernandez', teacher_code: 'TCH-011', email: 'rosario.fernandez@school.sci.edu.ph' },
        { first_name: 'Manuel', middle_name: 'Aguilar', last_name: 'Santiago', teacher_code: 'TCH-012', email: 'manuel.santiago@school.sci.edu.ph' },
        { first_name: 'Teresita', middle_name: 'Morales', last_name: 'Rivera', teacher_code: 'TCH-013', email: 'teresita.rivera@school.sci.edu.ph' },
        { first_name: 'Roberto', middle_name: 'Ocampo', last_name: 'Hernandez', teacher_code: 'TCH-014', email: 'roberto.hernandez@school.sci.edu.ph' },
        { first_name: 'Gloria', middle_name: 'Macaraeg', last_name: 'Salazar', teacher_code: 'TCH-015', email: 'gloria.salazar@school.sci.edu.ph' },
        { first_name: 'Danilo', middle_name: 'Espiritu', last_name: 'Velasco', teacher_code: 'TCH-016', email: 'danilo.velasco@school.sci.edu.ph' },
        { first_name: 'Maricel', middle_name: 'Soriano', last_name: 'Romero', teacher_code: 'TCH-017', email: 'maricel.romero@school.sci.edu.ph' },
        { first_name: 'Alfredo', middle_name: 'Dela Torre', last_name: 'Vargas', teacher_code: 'TCH-018', email: 'alfredo.vargas@school.sci.edu.ph' },
        { first_name: 'Natividad', middle_name: 'Buenaventura', last_name: 'Abad', teacher_code: 'TCH-019', email: 'natividad.abad@school.sci.edu.ph' },
        { first_name: 'Carmelo', middle_name: 'Enriquez', last_name: 'Valdez', teacher_code: 'TCH-020', email: 'carmelo.valdez@school.sci.edu.ph' },
        { first_name: 'Erlinda', middle_name: 'Resurreccion', last_name: 'Medina', teacher_code: 'TCH-021', email: 'erlinda.medina@school.sci.edu.ph' },
        { first_name: 'Bernardo', middle_name: 'Ignacio', last_name: 'Padilla', teacher_code: 'TCH-022', email: 'bernardo.padilla@school.sci.edu.ph' },
        { first_name: 'Corazon', middle_name: 'Rebuelta', last_name: 'Magno', teacher_code: 'TCH-023', email: 'corazon.magno@school.sci.edu.ph' },
        { first_name: 'Virgilio', middle_name: 'Halili', last_name: 'Domingo', teacher_code: 'TCH-024', email: 'virgilio.domingo@school.sci.edu.ph' },
        { first_name: 'Marilou', middle_name: 'Paglinawan', last_name: 'Bonifacio', teacher_code: 'TCH-025', email: 'marilou.bonifacio@school.sci.edu.ph' },
        { first_name: 'Renato', middle_name: 'Macapagal', last_name: 'Villafuerte', teacher_code: 'TCH-026', email: 'renato.villafuerte@school.sci.edu.ph' },
        { first_name: 'Luzviminda', middle_name: 'Batungbakal', last_name: 'Tolentino', teacher_code: 'TCH-027', email: 'luzviminda.tolentino@school.sci.edu.ph' },
        { first_name: 'Gerardo', middle_name: 'Panganiban', last_name: 'Mercado', teacher_code: 'TCH-028', email: 'gerardo.mercado@school.sci.edu.ph' },
        { first_name: 'Florencia', middle_name: 'Sarmiento', last_name: 'Dela Vega', teacher_code: 'TCH-029', email: 'florencia.delavega@school.sci.edu.ph' },
        { first_name: 'Wilfredo', middle_name: 'Concepcion', last_name: 'Beltran', teacher_code: 'TCH-030', email: 'wilfredo.beltran@school.sci.edu.ph' },
    ];

    await prisma.teacher.createMany({
        data: predefinedTeachers,
        skipDuplicates: true,
    });
}