import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PopularCard = ({ job }) => {
    return (
        <View style={styles.jobCard}>
            <View style={styles.jobCardImage}>
            <Image source={job.image} style={styles.jobCardIcon}/>
            </View>
           <View style={styles.section}>
           <Text style={styles.jobTitle}>{job.title}</Text>
           <Text style={styles.salary}>{job.salary}</Text>
           </View>
            <View style={styles.subSection}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    jobCard: {
        height: 75,
        width: 350,
        top:80,
        borderRadius: 12,
        marginRight: 15,
        padding: 15,
        backgroundColor:'#ffffff',
        marginBottom:15,
    },
    jobCardImage: {
        height: 46,
        width: 46,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
    },
    jobCardIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginTop: 8,
    },
    jobBox: {
        marginBottom:20,
        marginLeft:55,
    },
    section:{
        flexDirection:'row',
        marginLeft:50,
        justifyContent:'space-between',
        bottom:60,
    },
    jobTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0D0D26',
        marginLeft:5,
    },
    salary:{
        fontSize: 12,
        fontWeight: '400',
        color: '#0D0D26',
    },
    subSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        bottom:60,
        marginLeft:55,
    },
    company:{
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',

    },
    location:{
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
    }
});

export default PopularCard;