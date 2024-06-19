import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const jobCard = ({ job }) => {
    return (
        
        <View  style={[styles.jobCard, { backgroundColor: job.backgroundColor }]}>
            <View style={styles.jobCardImage}>
                <Image source={job.image} style={styles.jobCardIcon} />
            </View>
            <View style={styles.jobBox}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobDesc}>{job.company}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.price}>{job.salary}</Text>
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    jobCard: {
        flexDirection: 'column',
        height: 186,
        width: 280,
        top:100,
        borderRadius: 12,
        marginBottom: 100,
        marginRight: 15,
        padding: 15,
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
        marginLeft:50,
    },
    jobTitle: {
        top:-60,
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    jobDesc: {
        top:-60,
        fontSize: 14,
        fontWeight: '400',
        color: '#ffffff',
    },
    details: {
        top:18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
    },
    location: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
    }
});

export default jobCard;