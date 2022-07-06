import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot,  } from '@chakra-ui/react';

function TableChakra() {
  return (
    <TableContainer>
      <Table
        variant="simple"
        //display="block"
        maxWidth="80%"
        overflowX="auto"
        overflowY="hidden"
        whiteSpace="nowrap"
        mx="auto"
        mt={4}
      >
        <TableCaption>Data Penduduk</TableCaption>
        <Thead bgColor="blue.50">
          <Tr>
            <Th>Nama</Th>
            <Th>Alamat</Th>
            <Th>Umur</Th>
            <Th>Pekerjaan</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Adit</Td>
            <Td>Sleman</Td>
            <Td>25</Td>
            <Td>Atlit</Td>
            <Td>aaa@mail.com</Td>
          </Tr>
          <Tr>
            <Td>Budi</Td>
            <Td>Bantul</Td>
            <Td>28</Td>
            <Td>Marketing</Td>
            <Td>bbb@mail.com</Td>
          </Tr>
          <Tr>
            <Td>Candra</Td>
            <Td>Kulon Progo</Td>
            <Td>24</Td>
            <Td>Programmer</Td>
            <Td>ccc@mail.com</Td>
          </Tr>
          <Tr>
            <Td>Dion</Td>
            <Td>Yogyakarta</Td>
            <Td>23</Td>
            <Td>Designer</Td>
            <Td>ddd@mail.com</Td>
          </Tr>
          <Tr>
            <Td>Ega</Td>
            <Td>Wates</Td>
            <Td>27</Td>
            <Td>Teknisi</Td>
            <Td>eee@mail.com</Td>
          </Tr>
        </Tbody>
        <Tfoot bgColor="blackAlpha.50">
        <Tr>
            <Td>Nama</Td>
            <Td>Alamat</Td>
            <Td>Umur</Td>
            <Td>Pekerjaan</Td>
            <Td>Email</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default TableChakra;
