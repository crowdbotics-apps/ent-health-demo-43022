import { FlatList } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const PatientPortal = () => {
  const patientData = {
    resourceType: "Patient",
    id: "patient1",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">John Michael Smith</div>'
    },
    identifier: [{
      use: "usual",
      type: {
        coding: [{
          system: "http://terminology.hl7.org/CodeSystem/v2-0203",
          code: "MR",
          display: "Medical record number"
        }],
        text: "Medical record number"
      },
      system: "urn:oid:1.2.36.146.595.217.0.1",
      value: "12345",
      period: {
        start: "2001-05-06"
      },
      assigner: {
        display: "Acme Healthcare"
      }
    }],
    active: true,
    name: [{
      use: "official",
      family: "Smith",
      given: ["John", "Michael"]
    }],
    telecom: [{
      system: "phone",
      value: "555-123-4567",
      use: "home"
    }, {
      system: "email",
      value: "john.smith@example.com",
      use: "home"
    }],
    gender: "male",
    birthDate: "1985-03-15",
    address: [{
      use: "home",
      line: ["456 Elm St"],
      city: "Springfield",
      state: "Illinois",
      postalCode: "67890",
      country: "USA"
    }]
  };
  const apptData = [{
    date: "2023-08-22",
    doctor: "Dr. Smith",
    patientId: "patient1",
    notes: "John complains of persistent headaches over the past two weeks. No history of head injuries. Suspected tension headaches. Advised to track triggers and stressors."
  }, {
    date: "2023-05-10",
    doctor: "Dr. Johnson",
    patientId: "patient1",
    notes: "John presents with symptoms of fatigue, weight gain, and hair thinning. Thyroid function test ordered to rule out hypothyroidism. Follow-up scheduled for test results."
  }, {
    date: "2022-10-03",
    doctor: "Dr. Rodriguez",
    patientId: "patient1",
    notes: "John reports difficulty breathing during exercise. Past history of asthma. Lung function tests conducted, revealing decreased lung capacity. Inhaler dosage adjusted."
  }, {
    date: "2022-09-12",
    doctor: "Dr. Patel",
    patientId: "patient1",
    notes: "John experiences seasonal allergies, reporting sneezing and itchy eyes. Prescribed antihistamines and advised on environmental allergen management."
  }];
  const prescriptions = [{
    medication: "Antihistamine",
    dosage: "10mg",
    frequency: "Once daily",
    instructions: "Take in the evening as needed for seasonal allergy symptoms."
  }, {
    medication: "Inhaled Corticosteroid",
    dosage: "100mcg",
    frequency: "Twice daily",
    instructions: "Use as a maintenance inhaler for asthma. Rinse mouth after each use."
  }, {
    medication: "Levothyroxine",
    dosage: "75mcg",
    frequency: "Once daily",
    instructions: "Take on an empty stomach in the morning for thyroid management."
  }, {
    medication: "NSAID",
    dosage: "200mg",
    frequency: "Every 6 hours as needed",
    instructions: "Take with food for lower back pain. Do not exceed 800mg in 24 hours."
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("./account_circle_FILL0_wght400_GRAD0_opsz48.png")} />
        <Text style={styles.name}>
          {patientData.name[0].given.join(" ")} {patientData.name[0].family}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Gender: {patientData.gender}</Text>
        <Text style={styles.infoText}>Birth Date: {patientData.birthDate}</Text>
        <Text style={styles.infoText}>
          Phone: {patientData.telecom[0].value}
        </Text>
        <Text style={styles.infoText}>
          Email: {patientData.telecom[1].value}
        </Text>
        <Text style={styles.infoText}>
          Address: {patientData.address[0].line[0]},{" "}
          {patientData.address[0].city}, {patientData.address[0].state},{" "}
          {patientData.address[0].postalCode}, {patientData.address[0].country}
        </Text>
      </View>

      <View style={styles.lower}>
        <View style={styles.col1}>
          <Text style={styles.h1}>Appointments</Text>
          <FlatList style={styles.flatlist} renderItem={({
          item
        }) => <View style={styles.renderItem}>
                <Text style={styles.h2}>{item.date}</Text>
                <Text style={styles.h3}>{item.doctor}</Text>
                <Text>{item.patient}</Text>
                <Text>{item.notes}</Text>
              </View>} ItemSeparatorComponent={() => <View style={styles.XlMPPNVK} />} data={apptData} keyExtractor={(item, index) => index}></FlatList>{" "}
        </View>
        <View style={styles.col2}>
          <Text style={styles.h1}>Prescriptions</Text>
          <View style={styles.lower}> <View style={styles.col1Fl}>
            <Text>Medication:</Text>
          </View></View>
          
          <FlatList style={styles.flatlist} renderItem={({
          item
        }) => <View style={styles.renderItem}>
                <Text>{item.medication}</Text>
                <Text>{item.dosage}</Text>
                <Text>{item.frequency}</Text>
                <Text>{item.instructions}</Text>
              </View>} ItemSeparatorComponent={() => <View style={styles.YzkGHIhz} />} data={prescriptions} keyExtractor={(item, index) => index}></FlatList>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  col1: {
    flex: 1
  },
  col2: {
    flex: 1
  },
  col1Fl: {
    flex: 1,
    width: "25%"
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold"
  },
  h2: {
    fontSize: 18,
    fontWeight: "bold"
  },
  h3: {
    fontSize: 14
  },
  header: {
    alignItems: "center",
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  lower: {
    flexDirection: "row"
  },
  name: {
    fontSize: 24,
    fontWeight: "bold"
  },
  info: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10
  },
  flatlist: {},
  renderItem: {
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  XlMPPNVK: {
    backgroundColor: "#000000",
    height: 1
  },
  StpgNiSX: {
    position: "absolute",
    width: 100,
    height: 150
  },
  shQVzOsZ: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  YzkGHIhz: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default PatientPortal;