
  /**
   * If constructed with a clustered redis instance,
   * this method establishes the redlock instance's connection to each redis client of the cluster
   */
//   private async _getClientConnections(client: Client): Promise<void> {
//       console.log('4 in _getClientConnections function');
//     try {
//       console.log('5 calling client.clusterNodes()');
//       const nodes = await client.clusterNodes();
//       console.log("found cluster nodes in _getClientConnections")
//       const nodeInfoArr = nodes.replace(/\n|@|:/g, " ").split(" ");
//       console.log(nodeInfoArr);
//       const clientArray = [];
//       for (let i = 0; i < nodeInfoArr.length; i++) {
//           if (nodeInfoArr[i] === "connected") {
//               console.log('in the for-loop of _getClientConnections');
//               clientArray.push([nodeInfoArr[i-8], nodeInfoArr[i-7]]);
//           }
//       }
//       //   console.log(clientArray)
//       // const connectInfoArray: string[][] = await this._getNodeConnectInfoFromCluster(client);
//       // console.log('back in _getClientConnections, after finishing _getNodeConnectInfoFromCluster');
//       console.log(clientArray);
//       for (const [host, port] of clientArray) {
//         const client: Client = await connect({hostname: host, port: Number(port)});
//         this.clients.add(client);
//       }
//       console.log('this.clients set: ', this.clients);
//       console.log('leaving the try block of _getClientConnections function');
//     }
//     // if error due to client not being a cluster, add single client instance to this.this.clients
//     catch (error) {
//       console.log('in the catch block of _getClientConnections function, error: ', error);
//       this.clients.add(client);
//       console.log('this.clients set: ', this.clients);
//       const nodeInfo = await client.info("server");
//       console.log(nodeInfo);
//       // await this.acquire(["bdc4076d8604a493c324292b57ed3c3f00797f8d"], 5000, {
//       //   // The expected clock drift; for more details see:
//       //   // http://redis.io/topics/distlock
//       //   driftFactor: 0.01, // multiplied by lock ttl to determine drift time
    
//       //   // The max number of times Redlock will attempt to lock a resource
//       //   // before erroring.
//       //   retryCount: 10,
    
//       //   // the time in ms between attempts
//       //   retryDelay: 200, // time in ms
    
//       //   // the max time in ms randomly added to retries
//       //   // to improve performance under high contention
//       //   // see https://www.awsarchitectureblog.com/2015/03/backoff.html
//       //   retryJitter: 200, // time in ms
    
//       //   // The minimum remaining time on a lock before an extension is automatically
//       //   // attempted with the `using` API.
//       //   automaticExtensionThreshold: 500, // time in ms
//       // });
//     }
//  }

  /**
   * This method pulls hostname and port out of cluster connection info, returns error if client is not a cluster
  */
  //  private async _getNodeConnectInfoFromCluster(client: Client) {
  //      console.log('in the _getNodeConnectInfoFromCluster function');
  //       const nodes = await client.clusterNodes();
  //       console.log("found cluster nodes in _getNodeConnectInfoFromCluster")
  //       const nodeInfoArr = nodes.replace(/\n|@|:/g, " ").split(" ");
  //       console.log(nodeInfoArr);
  //       const clientArray = [];
  //       for (let i = 0; i < nodeInfoArr.length; i++) {
  //           if (nodeInfoArr[i] === "connected") {
  //               console.log('in the for-loop of _getNodeConnectInfoFromCluster');
  //               clientArray.push([nodeInfoArr[i-8], nodeInfoArr[i-7]]);
  //           }
  //       }
  //       console.log(clientArray);
  //       console.log('leaving the _getNodeConnectInfoFromCluster function');
  //       return clientArray;
  // }